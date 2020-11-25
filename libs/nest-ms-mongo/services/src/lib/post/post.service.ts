import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PostEntity } from '@egamings/shared/nest/domain';

import {
  PostCreateInputDto,
  PostUpdateInputDto,
  PostWhereUniqueInputDto,
} from '@egamings/shared/nest/domain';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>
  ) {}

  async findAll(): Promise<PostEntity[]> {
    return this.postRepository.find();
  }

  async create(postCreateInputDto: PostCreateInputDto) {
    return this.postRepository.save(
      this.postRepository.create(postCreateInputDto)
    );
  }

  async update(postUpdateInputDto: PostUpdateInputDto): Promise<PostEntity> {
    const id = postUpdateInputDto.where.id;

    await this.postRepository.update(id, postUpdateInputDto.data);
    return this.postRepository.findOne(id);
  }

  async delete(
    postWhereUniqueInputDto: PostWhereUniqueInputDto
  ): Promise<PostEntity> {
    const post = await this.postRepository.findOneOrFail(
      postWhereUniqueInputDto.id
    );
    await this.postRepository.delete(postWhereUniqueInputDto.id);
    return post;
  }
}
