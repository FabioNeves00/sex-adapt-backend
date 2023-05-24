import { EstablishmentEntity } from '../models/establishment/entities/establishment.entity';

export const isEstablishmentFavoritedByUser = (
  establishment: EstablishmentEntity,
  userId: string
) => establishment.favoritedBy.some((user) => user.id === userId);
