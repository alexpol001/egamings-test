import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { PostService } from '@egamings/nest-ms-mongo/services';

import {
  PostCreateInputDto,
  PostUpdateInputDto,
  PostWhereUniqueInputDto,
} from '@egamings/shared/nest/domain';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @MessagePattern('findAllPost')
  findAll() {
    return this.postService.findAll();
  }

  @MessagePattern('createPost')
  create(@Payload() postCreateInputDto: PostCreateInputDto) {
    return this.postService.create(postCreateInputDto);
  }

  @MessagePattern('updatePost')
  update(@Payload() postUpdateInputDto: PostUpdateInputDto) {
    return this.postService.update(postUpdateInputDto);
  }

  @MessagePattern('deletePost')
  delete(@Payload() postWhereUniqueInputDto: PostWhereUniqueInputDto) {
    return this.postService.delete(postWhereUniqueInputDto);
  }
}
