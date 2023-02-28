import { IBaseEntity } from '../../base/interfaces/base-entity.interface';
import { IUserEntity } from '../../user/interfaces/user.interface';

export interface ISuggestEstablishmentEntity extends IBaseEntity {
  suggestedBy: IUserEntity;
  name: string;
  category: string;
  address: string;
  landline: string;
  price: string;
  isInPlace: boolean;
  website: string;
  elevator: boolean;
  bar: boolean;
  unevenness: boolean;
  incompatible_dimensions: boolean;
  ground_floor_room: boolean;
  sign_language: boolean;
  tactile_floor: boolean;
  braille: boolean;
}
