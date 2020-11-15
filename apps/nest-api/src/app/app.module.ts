import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'REDIS_CLIENT',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
          auth_pass: 'sOmE_sEcUrE_pAsS',
        },
      },
      {
        name: 'RABBIT_CLIENT',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'cats_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
      {
        name: 'NATS_MONGO_CLIENT',
        transport: Transport.NATS,
        options: {
          url: 'nats://localhost:4222',
          queue: 'cats_queue',
        },
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
