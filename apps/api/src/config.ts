import { config as loadDotenv } from 'dotenv';
import { z } from 'zod';

loadDotenv();

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().url(),
  OPENAI_API_KEY: z.string().min(1),
  OPENAI_MODEL: z.string().default('gpt-4.1-mini'),
  JWT_SECRET: z.string().min(10)
});

export const env = envSchema.parse(process.env);
