import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Post } from '@egamings/shared/nest/db-mongo';

import {
  PostCreateArgs,
  PostUpdateArgs,
  PostWhereUniqueArgs,
} from '@egamings/shared/domain';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async create(args: PostCreateArgs) {
    return this.postRepository.save(this.postRepository.create(args));
  }

  async update(args: PostUpdateArgs): Promise<Post> {
    const id = args.where.id;

    await this.postRepository.update(id, args.data);
    return this.postRepository.findOne(id);
  }

  async delete(args: PostWhereUniqueArgs): Promise<Post> {
    const post = await this.postRepository.findOneOrFail(args.id);
    await this.postRepository.delete(args.id);
    return post;
  }
}
