import { UserEntity } from '@user/entities/user.entity';
import { IReviewEntity } from './../interfaces/review.interface';
import { BaseEntity } from '@base/entities/base-entity.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
@Entity({ name: 'review' })
export class ReviewEntity extends BaseEntity implements IReviewEntity {
	@ManyToOne(() => UserEntity, (user) => user.reviews, { cascade: true })
	user: UserEntity;

	@Column()
	grade: number;

	@Column()
	comment: string;
}
