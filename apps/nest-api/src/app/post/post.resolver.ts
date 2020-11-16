import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs/operators';
import { NATS_MONGO_CLIENT } from '../shared/clients/clients.constants';
import { Post } from './post.model';

@Resolver((of) => String)
export class PostResolver {
  constructor(
    @Inject(NATS_MONGO_CLIENT) private readonly natsMongoClient: ClientProxy
  ) {}

  @Query((returns) => String)
  _dummy(): string {
    return "Hello, I'm Dummy!";
  }

  @Query((returns) => [Post])
  async findAllPost(): Promise<Post[]> {
    return this.natsMongoClient
      .send('findAllPost', [])
      .pipe(timeout(5000))
      .toPromise();
  }

  @Mutation((returns) => Post)
  async createPost(): Promise<Post> {
    return this.natsMongoClient
      .send('createPost', [])
      .pipe(timeout(5000))
      .toPromise();
  }
}
