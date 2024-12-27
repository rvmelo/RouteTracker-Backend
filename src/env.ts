import { z } from 'zod';
export const envSchema = z.object({
  GOOGLE_MAPS_CLIENT_KEY: z.string(),
  DATABASE_URL: z.string(),
});
export type Env = z.infer<typeof envSchema>;
