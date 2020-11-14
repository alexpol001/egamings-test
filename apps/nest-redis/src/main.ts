import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: {
      url: 'redis://localhost:6379',
      auth_pass: 'sOmE_sEcUrE_pAsS',
    },
  });
  app.listen(() => console.log('Microservice Redis is listening'));
}
bootstrap();
