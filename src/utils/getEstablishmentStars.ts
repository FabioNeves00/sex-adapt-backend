import { EstablishmentEntity } from '../models/establishment/entities/establishment.entity';

export function getEstablishmentStars(establishment: EstablishmentEntity) {
  let stars = 0;
  establishment.reviews.forEach((review) => {
    stars += review.grade;
  });

  return stars / establishment.reviews.length || 0;
}
