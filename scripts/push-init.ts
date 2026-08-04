/**
 * NOHO Tunisia — initial DB push + seed. Idempotent, safe to re-run.
 * Run with: npx tsx scripts/push-init.ts
 *
 * Creates User / AffiliateCode / Referral (matching prisma/schema.prisma) via
 * raw libSQL DDL, then seeds the staff logins via the Prisma client (so all
 * value encoding is Prisma's). Works against local dev.db (LOCAL_SQLITE=1) or
 * the configured Turso DB.
 */
import "dotenv/config";
import { createClient } from "@libsql/client";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const useLocal = process.env.LOCAL_SQLITE === "1";
const conn = useLocal
  ? { url: "file:./prisma/dev.db" }
  : { url: (process.env.TURSO_DATABASE_URL ?? "").trim(), authToken: (process.env.TURSO_AUTH_TOKEN ?? "").trim() };

const DDL: string[] = [
  `CREATE TABLE IF NOT EXISTS "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'EMPLOYEE',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email")`,
  `CREATE TABLE IF NOT EXISTS "AffiliateCode" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "label" TEXT NOT NULL DEFAULT 'Code général',
    "ownerId" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "signups" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AffiliateCode_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "AffiliateCode_code_key" ON "AffiliateCode"("code")`,
  `CREATE INDEX IF NOT EXISTS "AffiliateCode_ownerId_idx" ON "AffiliateCode"("ownerId")`,
  `CREATE TABLE IF NOT EXISTS "Referral" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "codeId" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Referral_codeId_fkey" FOREIGN KEY ("codeId") REFERENCES "AffiliateCode"("id") ON DELETE CASCADE ON UPDATE CASCADE
  )`,
  `CREATE INDEX IF NOT EXISTS "Referral_codeId_idx" ON "Referral"("codeId")`,
];

async function main() {
  if (!useLocal && !conn.url) throw new Error("No DATABASE configured (set LOCAL_SQLITE=1 or TURSO_DATABASE_URL).");

  const raw = createClient(conn);
  for (const stmt of DDL) await raw.execute(stmt);
  raw.close();

  const prisma = new PrismaClient({ adapter: new PrismaLibSql(conn) });
  const seed = async (email: string | undefined, name: string, role: string, pw: string | undefined) => {
    if (!email || !pw) { console.warn(`skip ${role}: missing email/password env`); return; }
    const passwordHash = await bcrypt.hash(pw, 10);
    await prisma.user.upsert({
      where: { email },
      update: { name, role, passwordHash, active: true },
      create: { name, email, role, passwordHash },
    });
    console.log(`seeded ${role}: ${email}`);
  };
  await seed(process.env.ADMIN_EMAIL, "Mokhtar Khiari", "ADMIN", process.env.ADMIN_INITIAL_PASSWORD);
  await seed(process.env.SEED_EMPLOYEE_EMAIL, "Équipe NOHO", "EMPLOYEE", process.env.SEED_EMPLOYEE_PASSWORD);
  await seed(process.env.SEED_PARTNER_EMAIL, "Partenaire démo", "PARTNER", process.env.SEED_PARTNER_PASSWORD);

  const count = await prisma.user.count();
  const users = await prisma.user.findMany({ select: { email: true, role: true } });
  console.log(`users in DB: ${count}`, users);
  await prisma.$disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
