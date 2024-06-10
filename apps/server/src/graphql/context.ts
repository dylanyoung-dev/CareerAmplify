import { prisma } from '@ignium/careeramplify-database';

export type Context = {
  dbClient: typeof prisma;
  token: string;
};

export const createContext = async (req: any): Promise<Context> => {
  const token = req.headers?.authorization?.split(' ')[1] || '';

  return {
    dbClient: prisma,
    token
  };
};
