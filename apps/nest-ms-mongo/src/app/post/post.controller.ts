import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { PostService } from './post.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @MessagePattern('createPost')
  create(@Payload() data: any[]) {
    return this.postService.create();
  }

  @MessagePattern('findAllPost')
  findAll(@Payload() data: any[]) {
    return this.postService.findAll();
  }
}
