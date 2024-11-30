import { DefaultEntity } from './default.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Team_entity } from './team_entity';

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
  @ManyToOne(() => Team_entity, (team: Team_entity) => team.users)
  @JoinColumn()
  team: Team_entity; // 몇 번 팀인가?
}
