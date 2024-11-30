import { Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { UserEntity } from './user.entity';
import { DefaultEntity } from './default.entity';
import { BoardEntity } from './board.entity';

@Entity()
export class Team_entity extends DefaultEntity {
  @OneToMany(() => UserEntity, (users: UserEntity) => users.team)
  users: UserEntity[];
  @OneToOne(() => BoardEntity) // 팀에 해당하는 게시판 번호
  @JoinColumn()
  board: BoardEntity;
}
