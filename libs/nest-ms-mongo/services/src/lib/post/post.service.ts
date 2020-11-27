import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Post } from '@egamings/shared/nest/db-mongo';

import {
  IPostGateway,
  IPostCreateInput,
  IPostUpdateArgs,
  IPostWhereUniqueInput,
  IPost,
} from '@egamings/shared/domain';

@Injectable()
export class PostService implements IPostGateway {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {}

  findAllPost(): Promise<IPost[]> {
    return this.postRepository.find();
  }

  createPost(data: IPostCreateInput): Promise<IPost> {
    return this.postRepository.save(this.postRepository.create(data));
  }

  async updatePost(args: IPostUpdateArgs): Promise<IPost> {
    const id = args.where.id;

    await this.postRepository.update(id, args.data);
    return this.postRepository.findOne(id);
  }

  async deletePost(where: IPostWhereUniqueInput): Promise<IPost> {
    const id = where.id;

    const post = await this.postRepository.findOneOrFail(id);

    await this.postRepository.delete(id);
    return post;
  }
}
