import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from '@egamings/shared/nest/db-postgres';

import { NewsService } from './news.service';

@Module({
  imports: [TypeOrmModule.forFeature([News])],
  providers: [NewsService],
  exports: [NewsService],
})
export class NewsModule {}
