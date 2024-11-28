import { Entity, OneToMany } from 'typeorm';
import { UserEntity } from './user.entity';
import { DefaultEntity } from './default.entity';

@Entity()
export class Team_entity extends DefaultEntity {
  @OneToMany(() => UserEntity, (users: UserEntity) => users.team)
  users: UserEntity[];
}
