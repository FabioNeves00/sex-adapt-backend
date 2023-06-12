import { GeolibInputCoordinates } from 'geolib/es/types';
import { IEstablishmentEntity } from '../models/establishment/interfaces/establishment.interface';
import { getDistance } from 'geolib';

export const getDistanceFromUser = (userDistance: GeolibInputCoordinates, establishment: IEstablishmentEntity) => {
  return {
    ...establishment, 
    distanceFromUser: getDistance(userDistance, {
      latitude: establishment.latitude,
      longitude: establishment.longitude
    }) / 1000
  }
}