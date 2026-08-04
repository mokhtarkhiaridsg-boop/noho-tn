import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  // Local-dev escape hatch: set LOCAL_SQLITE=1 in .env to run against a local
  // prisma/dev.db file instead of the production Turso DB. Prod never sets it.
  if (process.env.LOCAL_SQLITE === "1") {
    const adapter = new PrismaLibSql({ url: "file:./prisma/dev.db" });
    return new PrismaClient({ adapter });
  }
  const adapter = new PrismaLibSql({
    url: (process.env.TURSO_DATABASE_URL ?? "").trim(),
    authToken: (process.env.TURSO_AUTH_TOKEN ?? "").trim(),
  });
  return new PrismaClient({ adapter });
}

// Lazy: the client is only constructed on first actual use. In switcher mode
// (no DB env configured) nothing ever queries it, so we never try to build a
// client with an empty URL — keeping prod safe before Turso is provisioned.
function getClient(): PrismaClient {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = createPrismaClient();
  }
  return globalForPrisma.prisma;
}

export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getClient() as unknown as Record<string | symbol, unknown>;
    return client[prop];
  },
});
