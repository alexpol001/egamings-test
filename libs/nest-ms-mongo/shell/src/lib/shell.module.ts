import { Module } from '@nestjs/common';

import { DbMongoModule } from '@egamings/shared/nest/db';

import { PostModule } from './post/post.module';

@Module({
  imports: [DbMongoModule, PostModule],
})
export class ShellModule {}
