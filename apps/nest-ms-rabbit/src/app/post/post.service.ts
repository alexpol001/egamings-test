import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {}

  async create() {
    return this.postRepository.save(
      this.postRepository.create({
        title: 'Post Title',
        content: 'Post Content',
      })
    );
  }

  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async delete(ids: number[]): Promise<number> {
    return (await this.postRepository.delete(ids)).affected;
  }
}
