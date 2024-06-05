import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { Context, createContext } from './graphql/context';
import { schema } from './graphql/schema';

export const app = express();

const initServer = async () => {
  const corsOptions = {
    origin: '*',
    credentials: true
  };

  const apolloServer = new ApolloServer<Context>({
    schema
  });

  await apolloServer.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(corsOptions),
    bodyParser.json(),
    expressMiddleware(apolloServer, { context: async ({ req }) => await createContext(req) })
  );
};

initServer();
