import { DefaultEntity } from './default.entity';
import { Column, Entity } from 'typeorm';

@Entity()
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
  @Column({ nullable: true })
  level: number;
  @Column()
  accept: boolean;
}
