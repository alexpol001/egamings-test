import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '@egamings/shared/server/common';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {}

  async create() {
    return this.postRepository.create({
      title: 'Post Title',
      content: 'Post Content',
    });
  }

  async findAll(): Promise<Post[]> {
    console.log(await this.postRepository.count());
    return this.postRepository.find();
  }
}