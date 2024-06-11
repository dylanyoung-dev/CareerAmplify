import { DateTimeResolver } from 'graphql-scalars';
import { asNexusMethod, makeSchema } from 'nexus';
import path, { join } from 'path';

const dtResolver = asNexusMethod(DateTimeResolver, 'date');

export const schema = makeSchema({
  types: [dtResolver],
  outputs: {
    typegen: join(process.cwd(), 'node_modules', '@types', 'nexus-typegen', 'index.d.ts'),
    schema: join(process.cwd(), 'graphql', 'schema.graphql')
  },
  contextType: {
    export: 'Context',
    module: join(path.dirname(__filename), 'graphql', 'context.js')
  }
});
