import { Module } from '@nestjs/common';

import { DataModule } from './data/data.module';
import { GraphqlModule } from './graphql/graphql.module';
import { NewsModule } from './news/news.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [GraphqlModule.forRoot(PostModule, NewsModule), DataModule],
})
export class ShellModule {}
