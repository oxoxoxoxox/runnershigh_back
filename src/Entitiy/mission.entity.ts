import {
  Entity,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { MissionList } from './mission_list';
import { DefaultEntity } from './default.entity';

@Entity()
export class Mission extends DefaultEntity {
  @ManyToOne(() => UserEntity) // 단방향 관계 설정
  @JoinColumn({ name: 'user_id' }) // 외래키 이름
  user: UserEntity;

  @ManyToOne(() => MissionList, (missionList) => missionList.missions) // 단방향 관계 설정
  @JoinColumn({ name: 'mission_list' }) // 외래키 이름
  missionList: MissionList;

  @Column()
  mission_ing: boolean;

  @Column({ nullable: true })
  record: number; // 사용자 런닝 테이블의 기록
}