import { UserEntity } from '../../user/entities/user.entity';
import { IReviewEntity } from '../interfaces/review.interface';
import { BaseEntity } from '../../base/entities/base-entity.entity';
import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { EstablishmentEntity } from '../../establishment/entities/establishment.entity';
@Entity({ name: 'review' })
export class ReviewEntity extends BaseEntity implements IReviewEntity {
  @ManyToOne(() => UserEntity, (user) => user.reviews, { onDelete: 'CASCADE' })
  user: UserEntity;

  @Column()
  grade: number;

  @Column()
  comment: string;

  @ManyToOne(
    () => EstablishmentEntity,
    (establishment) => establishment.reviews,
    { onDelete: 'CASCADE' }
  )
  establishment: EstablishmentEntity;
}
