import { IBaseEntity } from '../../base/interfaces/base-entity.interface';
import { IUserEntity } from '../../user/interfaces';

export interface ISuportEntity extends IBaseEntity {
  message: string;
  user: IUserEntity;
}
