import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Post as IPost } from '@egamings/shared/domain';

@Entity({
  name: 'post',
})
export class PostEntity implements IPost {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;
}
