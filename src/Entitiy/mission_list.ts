import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Mission } from './mission.entity';
import { DefaultEntity } from './default.entity';

@Entity()
export class MissionList extends DefaultEntity{

  @Column()
  mission_description: string;

  //@Column({ nullable: true })  //미션의 조건값 계산 있어야하는지???
  //condition_value: string;

   @OneToMany(() => Mission, (mission) => mission.missionList)
    missions: Mission[]; //미션목록과 연속적으로 모든 개별 미션 데이터를 참조
}
