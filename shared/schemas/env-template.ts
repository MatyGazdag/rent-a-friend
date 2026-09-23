import {z} from 'zod'

const EnvSchema = z.object({
  DATABASE_URL: z.url(),
  PORT: z.string().default('3000'),
});

export type EnvInput = z.infer< typeof EnvSchema >;