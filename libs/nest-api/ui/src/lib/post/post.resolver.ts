import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs/operators';

import { IPost, IPostGateway } from '@egamings/shared/domain';

import { NATS_MONGO_CLIENT } from '../shared/clients/clients.constants';

import {
  PostCreateInput,
  Post,
  PostWhereUniqueInput,
  PostUpdateArgs,
} from './post.model';

@Resolver((of) => String)
export class PostResolver implements IPostGateway {
  constructor(
    @Inject(NATS_MONGO_CLIENT) private readonly natsMongoClient: ClientProxy
  ) {}

  @Query((returns) => [Post])
  findAllPost(): Promise<IPost[]> {
    return this.natsMongoClient
      .send('findAllPost', [])
      .pipe(timeout(5000))
      .toPromise();
  }

  @Mutation((returns) => Post)
  createPost(@Args('data') data: PostCreateInput): Promise<IPost> {
    return this.natsMongoClient
      .send('createPost', data)
      .pipe(timeout(5000))
      .toPromise();
  }

  @Mutation((returns) => Post)
  updatePost(@Args() args: PostUpdateArgs): Promise<IPost> {
    return this.natsMongoClient
      .send('updatePost', args)
      .pipe(timeout(5000))
      .toPromise();
  }

  @Mutation((returns) => Post)
  deletePost(@Args('where') where: PostWhereUniqueInput): Promise<IPost> {
    return this.natsMongoClient
      .send('deletePost', where)
      .pipe(timeout(5000))
      .toPromise();
  }
}
