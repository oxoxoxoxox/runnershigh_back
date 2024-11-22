import { Column, Entity, ManyToOne } from 'typeorm';
import { DefaultEntity } from './default.entity';
import { UserEntity } from './user.entity';

@Entity()
export class BoardEntity extends DefaultEntity {
  @ManyToOne((type) => UserEntity, (user: UserEntity) => user.id)
  @Column()
  title: string;
  @Column()
  contents: string;
  @Column()
  people: number;
  @Column()
  data: number;
}
