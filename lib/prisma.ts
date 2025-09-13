import { PrismaClient } from './generated/prisma'



const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

const globalforPrisma = global as unknown as {
  prisma: typeof prisma;
};

export default prisma;