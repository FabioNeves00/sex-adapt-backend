import { IAccessibilityEntity } from '@models/accessibility/interfaces/accessibility.interface';
import { IBaseEntity } from './../../base/interfaces/base-entity.interface';
import { ISuportEntity } from './../../suport/interfaces/suport.interface';
import { IReviewEntity } from '@review/interfaces/review.interface';
import { IEstablishmentEntity } from '@models/establishment/interfaces/establishment.interface';
import { ISuggestEstablishmentEntity } from '../../suggest-establishment/interfaces/suggest-establishment.interface';

export interface IUserEntity extends IBaseEntity {
  email: string;
  password: string;
  name: string;
  hashedRefreshToken?: string | null;
  reviews: IReviewEntity[];
  accessibilities: IAccessibilityEntity;
  favorites: IEstablishmentEntity[] | string[];
  suports: ISuportEntity[];
  establishment_suggestions: ISuggestEstablishmentEntity[];
}
