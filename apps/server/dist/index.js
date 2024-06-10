"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/app.ts
var import_server = require("@apollo/server");
var import_express4 = require("@apollo/server/express4");
var import_body_parser = __toESM(require("body-parser"));
var import_cors = __toESM(require("cors"));
var import_express = __toESM(require("express"));

// src/graphql/context.ts
var import_careeramplify_database = require("@ignium/careeramplify-database");
var createContext = async (req) => {
  const token = req.headers?.authorization?.split(" ")[1] || "";
  return {
    dbClient: import_careeramplify_database.prisma,
    token
  };
};

// src/graphql/schema.ts
var import_graphql_scalars = require("graphql-scalars");
var import_nexus = require("nexus");
var import_path = __toESM(require("path"));
var dtResolver = (0, import_nexus.asNexusMethod)(import_graphql_scalars.DateTimeResolver, "date");
var schema = (0, import_nexus.makeSchema)({
  types: [dtResolver],
  outputs: {
    typegen: (0, import_path.join)(process.cwd(), "node_modules", "@types", "nexus-typegen", "index.d.ts"),
    schema: (0, import_path.join)(process.cwd(), "graphql", "schema.graphql")
  },
  contextType: {
    export: "Context",
    module: (0, import_path.join)(import_path.default.dirname(__filename), "context.ts")
  }
});

// src/app.ts
var app = (0, import_express.default)();
var initServer = async () => {
  const corsOptions = {
    origin: "*",
    credentials: true
  };
  const apolloServer = new import_server.ApolloServer({
    schema
  });
  await apolloServer.start();
  app.use(
    "/graphql",
    (0, import_cors.default)(corsOptions),
    import_body_parser.default.json(),
    (0, import_express4.expressMiddleware)(apolloServer, { context: async ({ req }) => await createContext(req) })
  );
};
initServer();

// src/index.ts
var port = process.env.PORT || 5e3;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/ \u{1F680}`);
});
