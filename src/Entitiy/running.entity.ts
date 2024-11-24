import { Column, Entity, ManyToOne } from 'typeorm';
import { DefaultEntity } from './default.entity';
import { UserEntity } from './user.entity';

@Entity()
export class RunningEntity extends DefaultEntity{
  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @Column({type : 'float'})
  distance : number;

  @Column({type : 'timestamp'})
  startTime : Date;

  @Column({type : 'timestamp'})
  endTime : Date;

  @Column({type : 'float',nullable:true})
  calories : number;

  @Column({type :'float',nullable : true})
  averageSpeed : number;
}