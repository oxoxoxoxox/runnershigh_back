import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { DefaultEntity } from './default.entity';
import { UserEntity } from './user.entity';

@Entity()
export class Ranking extends DefaultEntity{

  @ManyToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;



 // @ManyToOne(() => RunningEntity)
  //@JoinColumn({ name:  })
  //running: RunningEntity;

}