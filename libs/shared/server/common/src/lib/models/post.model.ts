import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { PostComment } from './post-comment.model';

@Entity()
export class Post {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  content: string;
}
