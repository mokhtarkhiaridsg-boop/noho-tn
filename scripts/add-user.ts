/**
 * Add/update a single user. Reads everything from process.env (no .env load),
 * so the caller controls which DB (Turso vs local) and the user fields inline:
 *   NEW_USER_EMAIL, NEW_USER_NAME, NEW_USER_ROLE, NEW_USER_PASSWORD
 *   + LOCAL_SQLITE=1  OR  TURSO_DATABASE_URL + TURSO_AUTH_TOKEN
 */
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const useLocal = process.env.LOCAL_SQLITE === "1";
const conn = useLocal
  ? { url: "file:./prisma/dev.db" }
  : { url: (process.env.TURSO_DATABASE_URL ?? "").trim(), authToken: (process.env.TURSO_AUTH_TOKEN ?? "").trim() };

async function main() {
  const email = (process.env.NEW_USER_EMAIL ?? "").trim().toLowerCase();
  const name = process.env.NEW_USER_NAME || email;
  const role = process.env.NEW_USER_ROLE || "PARTNER";
  const pw = process.env.NEW_USER_PASSWORD;
  if (!email || !pw) throw new Error("NEW_USER_EMAIL and NEW_USER_PASSWORD required");

  const prisma = new PrismaClient({ adapter: new PrismaLibSql(conn) });
  const passwordHash = await bcrypt.hash(pw, 10);
  await prisma.user.upsert({
    where: { email },
    update: { name, role, passwordHash, active: true },
    create: { name, email, role, passwordHash },
  });
  const u = await prisma.user.findUnique({ where: { email }, select: { email: true, role: true, active: true } });
  console.log(`upserted on ${useLocal ? "local dev.db" : "Turso"}:`, u);
  await prisma.$disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
