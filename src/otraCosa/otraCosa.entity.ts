import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class OtraCosa {

  @PrimaryGeneratedColumn()
  id: number;

}
