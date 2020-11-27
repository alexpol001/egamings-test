import {
  PostCreateArgs,
  PostUpdateArgs,
  PostWhereUniqueArgs,
} from '../args/post.args';

import { Post } from '../models/post.model';

export interface PostGateway {
  findAllPost(): Promise<Post[]>;

  createPost(args: PostCreateArgs): Promise<Post>;

  updatePost(args: PostUpdateArgs): Promise<Post>;

  deletePost(args: PostWhereUniqueArgs): Promise<Post>;
}
