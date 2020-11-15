import { Resolver, Query } from '@nestjs/graphql';
import { PostDummy } from './post.model';

@Resolver((of) => String)
export class PostsResolver {
  @Query((returns) => String)
  _dummy(): string {
    return "Hello, I'm Dummy!";
  }
}
