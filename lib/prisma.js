import { PrismaClient } from './generated/prisma';


// Esta linha previne a criação de múltiplas instâncias do Prisma Client
// em ambiente de desenvolvimento, o que pode causar erros.
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
}

export default prisma;
