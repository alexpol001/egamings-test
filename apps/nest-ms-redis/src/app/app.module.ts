import { Module } from '@nestjs/common';

import { DataModule } from '@egamings/nest-ms-redis/feature-main'

@Module({
  imports: [DataModule],
})
export class AppModule {}
