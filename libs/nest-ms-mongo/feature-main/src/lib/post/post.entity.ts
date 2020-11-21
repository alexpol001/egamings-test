import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Post as IPost } from '@egamings/shared/server/common';

@Entity()
export class Post implements IPost {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;
}
