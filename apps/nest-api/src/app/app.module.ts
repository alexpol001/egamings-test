import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { GraphqlModule } from './graphql/graphql.module';
import { NewsModule } from './news/news.module';
import { PostModule } from './post/post.module';
import { SharedClientsModule } from './shared/clients/clients.module';

@Module({
  imports: [SharedClientsModule, GraphqlModule.forRoot(PostModule, NewsModule)],
  controllers: [AppController],
})
export class AppModule {}
