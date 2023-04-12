import { AccessibilityEntity } from '@models/accessibility/entities/accessibility.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne
} from 'typeorm';
import { BaseEntity } from '../../base/entities/base-entity.entity';
import { IEstablishmentEntity } from '../interfaces/establishment.interface';
import { UserEntity } from '../../user/entities/user.entity';
import { ReviewEntity } from '../../review/entities/review.entity';

@Entity({ name: 'establishments' })
export class EstablishmentEntity
  extends BaseEntity
  implements IEstablishmentEntity
{
  @OneToOne(
    () => AccessibilityEntity,
    (accessibilities) => accessibilities.establishment,
    {
      cascade: true
    }
  )
  @JoinColumn({ name: 'accessibility_id' })
  accessibilities: AccessibilityEntity;

  @ManyToMany(() => UserEntity, (user) => user.favorites)
  favoritedBy: UserEntity[];

  @Column()
  name: string;

  @Column('float')
  price: number;

  @Column()
  category: string;

  @Column({ default: '' })
  website?: string;

  @Column('json')
  address: {
    street: string;
    number: string;
    complement: string;
    cep: string;
  };

  @Column()
  ground_floor_room: boolean;

  @Column('varchar')
  latitude: string;

  @Column('varchar')
  longitude: string;

  @Column()
  cover_photo: string;

  @Column('text', { array: true, default: [] })
  room_photos?: string[];

  @Column()
  landline: string;

  @Column({ default: '' })
  whatsapp?: string;

  @OneToMany(() => ReviewEntity, (review) => review.establishment, {
    eager: true
  })
  reviews: ReviewEntity[];
}
