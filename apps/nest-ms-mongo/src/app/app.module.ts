import { Module } from '@nestjs/common';

import { DbModule } from '../db/db.module';
import { PostModule } from '@egamings/nest-ms-mongo/shell';

@Module({
  imports: [DbModule, PostModule],
})
export class AppModule {}
