import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { DefaultEntity } from './default.entity';
import { UserEntity } from './user.entity';

@Entity()
export class RangkingEntity extends DefaultEntity{

  @ManyToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @Column()
  rank: number;





 // @ManyToOne(() => RunningEntity)
  //@JoinColumn({ name:  })
  //running: RunningEntity;

}