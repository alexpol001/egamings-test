import { Module } from '@nestjs/common';

import { NewsModule as ServiceNewsModule } from '@egamings/nest-ms-rabbit/services';

import { NewsController } from './news.controller';

@Module({
  imports: [ServiceNewsModule],
  controllers: [NewsController],
})
export class NewsModule {}
