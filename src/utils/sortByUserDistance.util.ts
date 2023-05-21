import { GeolibInputCoordinates } from 'geolib/es/types';
import { getDistanceFromUser } from './getDistanceFromUser.util';
import { EstablishmentEntity } from '../models/establishment/entities/establishment.entity';

export const sortByUserDistance = (userDistance: GeolibInputCoordinates, establishments: Array<EstablishmentEntity & { rating: number; isFavoritedByUser: boolean }>) => {
  return establishments.sort((a, b) => getDistanceFromUser(userDistance, a).distanceFromUser - getDistanceFromUser(userDistance, b).distanceFromUser)
}