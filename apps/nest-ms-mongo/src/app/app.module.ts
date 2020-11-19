import { Module } from '@nestjs/common';

import { DbModule } from '../db/db.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [DbModule, PostModule],
})
export class AppModule {}
