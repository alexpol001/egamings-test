import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { News as INews } from '@egamings/shared/server/common';

@Entity()
export class News implements INews {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;
}
