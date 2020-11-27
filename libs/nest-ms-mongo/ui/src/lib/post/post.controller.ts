import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { PostService } from '@egamings/nest-ms-mongo/services';

import {
  IPost,
  IPostCreateInput,
  IPostGateway,
  IPostUpdateArgs,
  IPostWhereUniqueInput,
} from '@egamings/shared/domain';

@Controller('post')
export class PostController implements IPostGateway {
  constructor(private readonly postService: PostService) {}

  @MessagePattern('findAllPost')
  findAllPost(): Promise<IPost[]> {
    return this.postService.findAllPost();
  }

  @MessagePattern('createPost')
  createPost(data: IPostCreateInput): Promise<IPost> {
    return this.postService.createPost(data);
  }

  @MessagePattern('updatePost')
  updatePost(args: IPostUpdateArgs): Promise<IPost> {
    return this.postService.updatePost(args);
  }

  @MessagePattern('deletePost')
  deletePost(where: IPostWhereUniqueInput): Promise<IPost> {
    return this.postService.deletePost(where);
  }
}
