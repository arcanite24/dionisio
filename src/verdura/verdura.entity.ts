import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Verdura {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

}
