/**
 * NOHO Tunisia — LabelOrder table push. Idempotent, safe to re-run.
 * Run with: npx tsx scripts/push-labelorder.ts
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
  `CREATE TABLE IF NOT EXISTS "LabelOrder" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL DEFAULT '',
    "suite" TEXT NOT NULL DEFAULT '',
    "toName" TEXT NOT NULL,
    "toStreet1" TEXT NOT NULL,
    "toCity" TEXT NOT NULL,
    "toState" TEXT NOT NULL DEFAULT '',
    "toZip" TEXT NOT NULL DEFAULT '',
    "toCountry" TEXT NOT NULL,
    "lengthIn" REAL NOT NULL,
    "widthIn" REAL NOT NULL,
    "heightIn" REAL NOT NULL,
    "weightLb" REAL NOT NULL,
    "provider" TEXT NOT NULL,
    "servicelevel" TEXT NOT NULL,
    "amountUsd" REAL NOT NULL,
    "amountTnd" INTEGER NOT NULL,
    "rateObjectId" TEXT NOT NULL,
    "shipmentObjectId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING_PAYMENT',
    "labelUrl" TEXT NOT NULL DEFAULT '',
    "trackingNumber" TEXT NOT NULL DEFAULT '',
    "trackingUrl" TEXT NOT NULL DEFAULT '',
    "locale" TEXT NOT NULL DEFAULT 'fr',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE INDEX IF NOT EXISTS "LabelOrder_status_createdAt_idx"
     ON "LabelOrder"("status", "createdAt")`,
];

async function main() {
  if (!useLocal && !conn.url) throw new Error("No DB configured.");
  const db = createClient(conn);
  for (const stmt of DDL) await db.execute(stmt);
  const probe = await db.execute(`SELECT COUNT(*) AS n FROM "LabelOrder"`);
  console.log(`LabelOrder ready on ${useLocal ? "dev.db" : "Turso"} — rows: ${probe.rows[0].n}`);
  db.close();
}
main().catch((e) => { console.error(e); process.exit(1); });
