import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { INews } from '@egamings/shared/domain';

@Entity()
export class News implements INews {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;
}
