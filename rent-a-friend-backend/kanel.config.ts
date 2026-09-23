import dotenv from 'dotenv';

import { makeKyselyHook, kyselyTypeFilter } from 'kanel-kysely'

dotenv.config();

console.log('Kanel se připojuje k:', process.env.DATABASE_URL);

export default {
  connection: {
    host: process.env.POSTGRES_HOST || 'postgres-db',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  },
  
  outputPath: './src/db/types',
  
  preDeleteOutputFolder: true,
  
  typeFilter: kyselyTypeFilter,

  postRenderHooks: [
    makeKyselyHook(),
  ],
};