import { Module } from '@nestjs/common';

import { DataModule, NewsModule, PostModule } from '@egamings/nest-api/ui';

import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [GraphqlModule.forRoot(PostModule, NewsModule), DataModule],
})
export class ShellModule {}
