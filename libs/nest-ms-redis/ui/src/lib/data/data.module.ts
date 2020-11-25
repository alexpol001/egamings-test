import { Module } from '@nestjs/common';

import { DataModule as ServiceDataModule } from '@egamings/nest-ms-redis/services';

import { DataController } from './data.controller';

@Module({
  imports: [ServiceDataModule],
  controllers: [DataController],
})
export class DataModule {}
