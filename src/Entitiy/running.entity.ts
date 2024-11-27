import { Column, Entity, ManyToOne } from 'typeorm';
import { DefaultEntity } from './default.entity';
import { UserEntity } from './user.entity';

@Entity()
export class RunningEntity extends DefaultEntity{
  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @Column({type : 'float'})  //뛴 거리 ex) 3.42 3키로420미터
  distance : number;

  @Column() //러닝 시작 일시     //년 월 일 시,분
  startTime : string;

  @Column() // 뛴 시간  16.56 16분 56초
  time: number;

  @Column({type : 'int'})   //칼로리
  calories : number;

  @Column({type :'float'})   //평균 스피드
  averageSpeed : number;


}