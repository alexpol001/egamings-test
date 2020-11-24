import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from '@egamings/shared/nest/domain';

import { NewsController } from './news.controller';
import { NewsService } from './news.service';

@Module({
  imports: [TypeOrmModule.forFeature([News])],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}
