import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cosa {

  @PrimaryGeneratedColumn()
  id: number;

}
