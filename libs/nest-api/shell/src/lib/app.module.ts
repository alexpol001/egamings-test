import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'REDIS_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
          auth_pass: 'sOmE_sEcUrE_pAsS'
        }
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
