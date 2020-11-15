import { PostComment } from './post-comment.model';

export interface Post {
  id: string;

  content: string;

  comments: PostComment;
}
