import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  PostCreateInputDto,
  PostUpdateInputDto,
  PostWhereUniqueInputDto,
} from './post.dto';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async create(postCreateInputDto: PostCreateInputDto) {
    return this.postRepository.save(
      this.postRepository.create(postCreateInputDto)
    );
  }

  async update(postUpdateInputDto: PostUpdateInputDto): Promise<Post> {
    const id = postUpdateInputDto.where.id;

    await this.postRepository.update(id, postUpdateInputDto.data);
    return this.postRepository.findOne(id);
  }

  async delete(
    postWhereUniqueInputDto: PostWhereUniqueInputDto
  ): Promise<Post> {
    const post = await this.postRepository.findOneOrFail(
      postWhereUniqueInputDto.id
    );
    await this.postRepository.delete(postWhereUniqueInputDto.id);
    return post;
  }
}
