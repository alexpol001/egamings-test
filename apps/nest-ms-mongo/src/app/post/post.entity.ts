import {
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
  @ObjectIdColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;
}
