import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';

@Module({
  imports: [DbModule, NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
