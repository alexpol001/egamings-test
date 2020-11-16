import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import {
  NATS_MONGO_CLIENT,
  RABBIT_CLIENT,
  REDIS_CLIENT,
} from './clients.constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: REDIS_CLIENT,
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
        },
      },
      {
        name: RABBIT_CLIENT,
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
        name: NATS_MONGO_CLIENT,
        transport: Transport.NATS,
        options: {
          url: 'nats://localhost:4222',
          queue: 'cats_queue',
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class SharedClientsModule {}
