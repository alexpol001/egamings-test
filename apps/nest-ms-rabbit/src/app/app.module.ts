import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';

import { NewsModule } from './news/news.module';

@Module({
  imports: [DbModule, NewsModule],
})
export class AppModule {}
