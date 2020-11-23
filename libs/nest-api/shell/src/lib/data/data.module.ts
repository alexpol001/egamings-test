import { Module } from '@nestjs/common';
import { SharedClientsModule } from '../shared/clients/clients.module';

import { DataController } from './data.controller';

@Module({
  imports: [SharedClientsModule],
  controllers: [DataController],
})
export class DataModule {}
