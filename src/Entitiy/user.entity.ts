import { DefaultEntity } from './default.entity';
import { Column } from 'typeorm';

export class UserEntity extends DefaultEntity {
  @Column()
  userID: string; // email
  @Column()
  userPW: string;
  @Column()
  userName: string;
  @Column()
  sex: boolean;
  @Column()
  age: number;
  @Column()
  level: number;
  @Column()
  accept: boolean;
}

