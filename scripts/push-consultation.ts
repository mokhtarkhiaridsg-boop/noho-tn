/**
 * NOHO Tunisia — ConsultationRequest table push. Idempotent, safe to re-run.
 * Run with: npx tsx scripts/push-consultation.ts
 * Works against local dev.db (LOCAL_SQLITE=1) or the configured Turso DB
 * (TURSO_DATABASE_URL / TURSO_AUTH_TOKEN), same pattern as push-init.ts.
 */
import "dotenv/config";
import { createClient } from "@libsql/client";

const useLocal = process.env.LOCAL_SQLITE === "1";
const conn = useLocal
  ? { url: "file:./prisma/dev.db" }
  : {
      url: (process.env.TURSO_DATABASE_URL ?? "").trim(),
      authToken: (process.env.TURSO_AUTH_TOKEN ?? "").trim(),
    };

const DDL: string[] = [
  `CREATE TABLE IF NOT EXISTS "ConsultationRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'fr',
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE INDEX IF NOT EXISTS "ConsultationRequest_status_createdAt_idx"
     ON "ConsultationRequest"("status", "createdAt")`,
];

async function main() {
  if (!useLocal && !conn.url) {
    throw new Error("No TURSO_DATABASE_URL configured and LOCAL_SQLITE != 1.");
  }
  const db = createClient(conn);
  for (const stmt of DDL) await db.execute(stmt);
  const probe = await db.execute(`SELECT COUNT(*) AS n FROM "ConsultationRequest"`);
  console.log(
    `ConsultationRequest ready on ${useLocal ? "dev.db" : "Turso"} — rows: ${probe.rows[0].n}`
  );
  db.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
