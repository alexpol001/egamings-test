import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { News as INews } from '@egamings/shared/domain';

@Entity({
  name: "news"
})
export class NewsEntity implements INews {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;
}
