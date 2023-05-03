import { IBaseEntity } from '../../base/interfaces/base-entity.interface';
import { IUserEntity } from '../../user/interfaces';
import { IAccessibilityEntity } from '../../accessibility/interfaces/accessibility.interface';

export interface IEstablishmentEntity extends IBaseEntity {
  accessibilities: IAccessibilityEntity;
  favoritedBy: IUserEntity[];
  name: string;
  price: number;
  category: string;
  website?: string;
  address: {
    street: string;
    number: string;
    complement: string;
    cep: string;
  };
  ground_floor_room: boolean;
  latitude: string;
  longitude: string;
  cover_photo?: string;
  room_photos?: string[];
  landline: string;
  whatsapp?: string;
}
