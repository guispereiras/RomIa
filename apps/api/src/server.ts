import cors from '@fastify/cors';
import sensible from '@fastify/sensible';
import Fastify from 'fastify';

import { env } from './config.js';
import { registerRoutes } from './routes.js';

async function bootstrap() {
  const app = Fastify({ logger: true });

  await app.register(cors, { origin: true });
  await app.register(sensible);
  await registerRoutes(app);

  await app.listen({ port: env.PORT, host: '0.0.0.0' });
}

bootstrap().catch((error) => {
  console.error(error);
  process.exit(1);
});
