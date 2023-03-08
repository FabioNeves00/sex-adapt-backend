import { EstablishmentEntity } from '../models/establishment/entities/establishment.entity';

export function getEstablishmentRating(establishment: EstablishmentEntity) {
  let rating = 0;
  establishment.reviews.forEach((review) => {
    rating += review.grade;
  });

  return rating / establishment.reviews.length || 0;
}
