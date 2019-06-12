import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Hero {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

}
