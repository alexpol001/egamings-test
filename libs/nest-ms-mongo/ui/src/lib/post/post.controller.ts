import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { PostService } from '@egamings/nest-ms-mongo/services';

import {
  Post,
  PostCreateArgs,
  PostGateway,
  PostUpdateArgs,
  PostWhereUniqueArgs,
} from '@egamings/shared/domain';

@Controller('post')
export class PostController implements PostGateway {
  constructor(private readonly postService: PostService) {}

  @MessagePattern('findAllPost')
  findAllPost(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @MessagePattern('createPost')
  createPost(args: PostCreateArgs): Promise<Post> {
    return this.postService.create(args);
  }

  @MessagePattern('updatePost')
  updatePost(args: PostUpdateArgs): Promise<Post> {
    return this.postService.update(args);
  }

  @MessagePattern('deletePost')
  deletePost(args: PostWhereUniqueArgs): Promise<Post> {
    return this.postService.delete(args);
  }
}
