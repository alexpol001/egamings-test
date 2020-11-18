import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs/operators';
import { RABBIT_CLIENT } from '../shared/clients/clients.constants';
import { DeletePostInput, Post } from './post.model';

@Resolver((of) => String)
export class PostResolver {
  constructor(
    @Inject(RABBIT_CLIENT) private readonly rabbitClient: ClientProxy
  ) {}

  @Query((returns) => String)
  _dummy(): string {
    return "Hello, I'm Dummy!";
  }

  @Query((returns) => [Post])
  async findAllPost(): Promise<Post[]> {
    return this.rabbitClient
      .send('findAllPost', [])
      .pipe(timeout(5000))
      .toPromise();
  }

  @Mutation((returns) => Post)
  async createPost(): Promise<Post> {
    return this.rabbitClient
      .send('createPost', [])
      .pipe(timeout(5000))
      .toPromise();
  }

  @Mutation((returns) => Number)
  async deletePost(@Args('data') data: DeletePostInput): Promise<number> {
    return this.rabbitClient
      .send('deletePost', data.ids)
      .pipe(timeout(5000))
      .toPromise();
  }
}
