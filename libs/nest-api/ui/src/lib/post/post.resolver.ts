import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs/operators';
import { NATS_MONGO_CLIENT } from '../shared/clients/clients.constants';
import {
  PostCreateInput,
  Post,
  PostUpdateInput,
  PostWhereUniqueInput,
} from './post.model';

@Resolver((of) => String)
export class PostResolver {
  constructor(
    @Inject(NATS_MONGO_CLIENT) private readonly natsMongoClient: ClientProxy
  ) {}

  @Query((returns) => [Post])
  async findAllPost(): Promise<Post[]> {
    return this.natsMongoClient
      .send('findAllPost', [])
      .pipe(timeout(5000))
      .toPromise();
  }

  @Mutation((returns) => Post)
  async createPost(@Args('data') data: PostCreateInput): Promise<Post> {
    return this.natsMongoClient
      .send('createPost', data)
      .pipe(timeout(5000))
      .toPromise();
  }

  @Mutation((returns) => Post)
  async updatePost(
    @Args('data') data: PostUpdateInput,
    @Args('where') where: PostWhereUniqueInput
  ): Promise<Post> {
    return this.natsMongoClient
      .send('updatePost', {
        data,
        where,
      })
      .pipe(timeout(5000))
      .toPromise();
  }

  @Mutation((returns) => Post)
  async deletePost(@Args('where') where: PostWhereUniqueInput): Promise<Post> {
    return this.natsMongoClient
      .send('deletePost', where)
      .pipe(timeout(5000))
      .toPromise();
  }
}
