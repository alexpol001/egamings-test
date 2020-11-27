import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { IPost } from '@egamings/shared/domain';

@Entity()
export class Post implements IPost {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;
}
