import { Column, Entity, ManyToOne } from 'typeorm';
import { ISuggestEstablishmentEntity } from '../interfaces/suggest-establishment.interface';
import { BaseEntity } from '../../base/entities/base-entity.entity';
import { IUserEntity } from '../../user/interfaces';
import { UserEntity } from '../../user/entities/user.entity';

@Entity({ name: 'establishment_suggestions' })
export class SuggestEstablishmentEntity
  extends BaseEntity
  implements ISuggestEstablishmentEntity
{
  @ManyToOne(() => UserEntity, (user) => user.establishment_suggestions)
  suggestedBy: IUserEntity;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  category: string;

  @Column({ type: 'varchar' })
  address: string;

  @Column({ type: 'varchar' })
  landline: string;

  @Column({ type: 'varchar' })
  price: string;

  @Column({ type: 'varchar' })
  website: string;

  @Column()
  isInPlace: boolean;

  @Column()
  ground_floor_room: boolean;

  @Column()
  elevator: boolean;

  @Column()
  bar: boolean;

  @Column()
  unevenness: boolean;

  @Column()
  incompatible_dimensions: boolean;

  @Column()
  sign_language: boolean;

  @Column()
  tactile_floor: boolean;

  @Column()
  braille: boolean;
}
