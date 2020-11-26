import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsEntity } from '@egamings/shared/nest/db-postgres';

import { NewsService } from './news.service';

@Module({
  imports: [TypeOrmModule.forFeature([NewsEntity])],
  providers: [NewsService],
  exports: [NewsService],
})
export class NewsModule {}
