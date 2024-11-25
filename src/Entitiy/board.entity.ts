import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { DefaultEntity } from './default.entity';
import { UserEntity } from './user.entity';

@Entity()
export class BoardEntity extends DefaultEntity {
  @ManyToOne((type) => UserEntity, (user: UserEntity) => user.id)
  @JoinColumn()
  user: UserEntity; //userid
  @Column()
  title: string; // 러닝 장소, 제목
  @Column()
  contents: string; //  게시글에 대한 내용
  @Column()
  image_url: string; // 게시글 이미지 url .. https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/5f1a8eb5-3b2f-47d4-b044-97291cb253a7.jpeg
  @Column()
  people: number; //  러닝 참석 인원?
  @Column()
  status: boolean; //  신청가능, 마감임박
  @Column()
  gender: string; //  성별 옵션 ex_남녀모두
  @Column()
  time: string; // 러닝 시간.
}
