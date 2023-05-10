import { EstablishmentEntity } from '../models/establishment/entities/establishment.entity';

export const isEstablishmentFavoritedByUser = (
  establishment: EstablishmentEntity,
  userId: string
) => establishment.favoritedBy.findIndex((user) => user.id === userId);
