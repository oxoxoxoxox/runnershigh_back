import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { DefaultEntity } from './default.entity';
import { UserEntity } from './user.entity';

@Entity()
export class Ranking extends DefaultEntity{

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: '사용자_id' })
  user: UserEntity;



 // @ManyToOne(() => RunningEntity)
  //@JoinColumn({ name: '러닝_테이블' })
  //running: RunningEntity;

}