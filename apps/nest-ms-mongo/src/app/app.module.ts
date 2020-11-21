import { Module } from '@nestjs/common';

import { DbModule } from '../db/db.module';
import { PostModule } from '@egamings/nest-ms-mongo/feature-main';

@Module({
  imports: [DbModule, PostModule],
})
export class AppModule {}
