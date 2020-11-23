import { Module } from '@nestjs/common';

import {
  DataModule,
  GraphqlModule,
  NewsModule,
  PostModule,
} from '@egamings/nest-api/shell';

@Module({
  imports: [GraphqlModule.forRoot(PostModule, NewsModule), DataModule],
})
export class AppModule {}
