import { Module } from '@nestjs/common';

import { PostModule as ServicePostModule } from '@egamings/nest-ms-mongo/services';

import { PostController } from './post.controller';

@Module({
  imports: [ServicePostModule],
  controllers: [PostController],
})
export class PostModule {}
