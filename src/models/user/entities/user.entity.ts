import { AccessibilityEntity } from './../../accessibility/entities/accessibility.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne
} from 'typeorm';
import { ReviewEntity } from './../../review/entities/review.entity';
import { BaseEntity } from './../../base/entities/base-entity.entity';
import { IUserEntity } from './../interfaces/user.interface';
import { SuportEntity } from '../../suport/entities/suport.entity';
import { EstablishmentEntity } from '../../establishment/entities/establishment.entity';
import { SuggestEstablishmentEntity } from '../../suggest-establishment/entities/suggest-establishment.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity implements IUserEntity {
  @Column({ unique: true })
  email: string;

  @Column({ type: 'varchar', length: '200' })
  password: string;

  @Column({ length: 120, type: 'varchar' })
  name: string;

  @OneToOne(
    () => AccessibilityEntity,
    (accessibilities) => accessibilities.user,
    {
      cascade: true
    }
  )
  @JoinColumn({ name: 'accessibility_id' })
  accessibilities: AccessibilityEntity;

  @OneToMany(() => ReviewEntity, (review) => review.user, { cascade: true })
  @JoinColumn({ name: 'review_id' })
  reviews: ReviewEntity[];

  @OneToMany(() => SuportEntity, (suport) => suport.user, { cascade: true })
  @JoinColumn({ name: 'suport_id' })
  suports: SuportEntity[];

  @ManyToMany(
    () => EstablishmentEntity,
    (establishment) => establishment.favoritedBy,
    { cascade: true }
  )
  @JoinTable({ name: 'favorites' })
  favorites: EstablishmentEntity[];

  @OneToMany(
    () => SuggestEstablishmentEntity,
    (suggestion) => suggestion.suggestedBy,
    { cascade: true }
  )
  @JoinColumn({ name: 'suggestion_id' })
  establishment_suggestions: SuggestEstablishmentEntity[];

  @Column({ nullable: true })
  hashedRefreshToken: string;
}
