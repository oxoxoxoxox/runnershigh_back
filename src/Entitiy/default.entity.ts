import { PrimaryGeneratedColumn } from 'typeorm';

export class DefaultEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
