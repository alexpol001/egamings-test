import { Module } from '@nestjs/common';

import { DataModule } from '@egamings/nest-ms-redis/shell'

@Module({
  imports: [DataModule],
})
export class AppModule {}
