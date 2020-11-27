import {
  IPostCreateInput,
  IPostUpdateArgs,
  IPostWhereUniqueInput,
} from '../args/post.args';

import { IPost } from '../models/post.model';

export interface IPostGateway {
  findAllPost(): Promise<IPost[]>;

  createPost(data: IPostCreateInput): Promise<IPost>;

  updatePost(args: IPostUpdateArgs): Promise<IPost>;

  deletePost(where: IPostWhereUniqueInput): Promise<IPost>;
}
