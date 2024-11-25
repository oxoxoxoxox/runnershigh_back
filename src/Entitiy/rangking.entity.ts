import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { DefaultEntity } from './default.entity';
import { UserEntity } from './user.entity';
import { RunningEntity } from './running.entity';

@Entity()
export class RangkingEntity extends DefaultEntity{

  @ManyToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @ManyToOne(() =>RunningEntity)
  @JoinColumn()
  running: RunningEntity;


}