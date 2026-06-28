import 'dotenv/config';
import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.DATABASE_URL?.trim();

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

function createPrismaClient() {
  const adapter = new PrismaPg({ connectionString: connectionString as string });

  return new PrismaClient({
    adapter,
    log: ['error'],
  });
}

export const prisma = connectionString
  ? globalForPrisma.prisma ?? createPrismaClient()
  : null;

if (connectionString && process.env.NODE_ENV !== 'production' && prisma) {
  globalForPrisma.prisma = prisma;
}
