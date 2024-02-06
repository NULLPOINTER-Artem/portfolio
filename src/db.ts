import { PrismaClient } from "@prisma/client";

const globalFroPrisma = global as unknown as {
  prisma: PrismaClient | undefined | null,
};

export const prisma = globalFroPrisma.prisma ?? new PrismaClient({
  log: ['query'],
});

if (process.env.NODE_ENV !== 'production') globalFroPrisma.prisma = prisma;
