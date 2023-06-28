import { sortByUserDistance } from './../../utils/sortByUserDistance.util';
import { isEstablishmentFavoritedByUser } from './../../utils/isEstablishmentFavoritedByUser.util';
import { AccessibilityEntity } from '../../models/accessibility/entities/accessibility.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';
import { EstablishmentEntity } from './entities/establishment.entity';
import { HttpCustomMessages } from '../../common/helpers/exceptions/messages/index.messages';
import { getEstablishmentRating } from '../../utils/getEstablishmentRating';
import { GeolibInputCoordinates } from 'geolib/es/types';
import { filter } from 'rxjs';

@Injectable()
export class EstablishmentService {
  constructor(
    @InjectRepository(EstablishmentEntity)
    private establishmentRepository: Repository<EstablishmentEntity>,
    @InjectRepository(AccessibilityEntity)
    private accessibilityRepository: Repository<AccessibilityEntity>
  ) {}

  async create(createEstablishmentDto: CreateEstablishmentDto) {
    const establishment = this.establishmentRepository.create(
      createEstablishmentDto
    );
    const accessibility = this.accessibilityRepository.create({
      ...createEstablishmentDto.accessibilities,
      establishment: establishment
    });
    establishment.accessibilities = accessibility;
    await this.accessibilityRepository.save(accessibility);
    const saved = await this.establishmentRepository.save(establishment);
    delete saved.createdAt;
    delete saved.updatedAt;
    delete saved.accessibilities.createdAt;
    delete saved.accessibilities.updatedAt;
    delete saved.accessibilities.establishment;
    delete saved.accessibilities.id;
    return saved;
  }

  async findAll(
    userId: string,
    filters: {
      price?: string;
      distance?: string;
      userCoordinates?: GeolibInputCoordinates;
    }
  ) {
    const establishments = await this.establishmentRepository.find({
      relations: ['accessibilities', 'reviews', 'favoritedBy']
    });
    let establishmentsWithFlags = establishments.map((establishment) => {
      delete establishment.createdAt;
      delete establishment.updatedAt;
      delete establishment.accessibilities.createdAt;
      delete establishment.accessibilities.updatedAt;
      delete establishment.accessibilities.establishment;
      delete establishment.accessibilities.id;
      return {
        ...establishment,
        rating: getEstablishmentRating(establishment),
        isFavoritedByUser: isEstablishmentFavoritedByUser(establishment, userId)
      };
    });
    establishmentsWithFlags.forEach(
      (establishment) => delete establishment.favoritedBy
    );

    if (filters.price) {
      establishmentsWithFlags = establishmentsWithFlags.filter(
        (establishment) => establishment.price <= +filters.price
      );
    }

    if (filters.distance && filters.userCoordinates) {
      establishmentsWithFlags = sortByUserDistance(
        filters.userCoordinates,
        establishmentsWithFlags
      );
    }

    return establishmentsWithFlags;
  }

  async findByAccessibilities(accessibilities: AccessibilityEntity) {
    const establishments = await this.establishmentRepository.find({
      where: {
        accessibilities: {
          bar: accessibilities.bar,
          elevator: accessibilities.elevator,
          incompatible_dimensions: accessibilities.incompatible_dimensions,
          sign_language: accessibilities.sign_language,
          braille: accessibilities.braille,
          tactile_floor: accessibilities.tactile_floor,
          unevenness: accessibilities.unevenness
        }
      },
      relations: ['accessibilities', 'reviews']
    });
    const establishmentsWithRating = establishments.map((establishment) => {
      delete establishment.createdAt;
      delete establishment.updatedAt;
      delete establishment.accessibilities.createdAt;
      delete establishment.accessibilities.updatedAt;
      delete establishment.accessibilities.establishment;
      delete establishment.accessibilities.id;
      return {
        ...establishment,
        rating: getEstablishmentRating(establishment)
      };
    });
    return establishmentsWithRating;
  }

  async findOneOrFail(
    options: FindOneOptions<EstablishmentEntity>,
    userId?: string
  ) {
    try {
      const establishment = await this.establishmentRepository.findOneOrFail({
        ...options,
        relations: ['accessibilities', 'reviews'],
        select: {
          accessibilities: {
            bar: true,
            braille: true,
            elevator: true,
            incompatible_dimensions: true,
            sign_language: true,
            tactile_floor: true,
            unevenness: true
          }
        }
      });
      const establishmentsWithFlags = {
        ...establishment,
        rating: getEstablishmentRating(establishment),
        isFavoritedByUser: isEstablishmentFavoritedByUser(establishment, userId)
      };
      delete establishmentsWithFlags.createdAt;
      delete establishmentsWithFlags.updatedAt;
      delete establishmentsWithFlags.accessibilities.createdAt;
      delete establishmentsWithFlags.accessibilities.updatedAt;
      delete establishmentsWithFlags.accessibilities.establishment;
      delete establishmentsWithFlags.accessibilities.id;

      return establishmentsWithFlags;
    } catch (error) {
      throw new NotFoundException(HttpCustomMessages.ESTABLISHMENT.NOT_FOUND);
    }
  }

  async update(id: string, updateEstablishmentDto: UpdateEstablishmentDto) {
    const establishment = await this.findOneOrFail({ where: { id } });
    this.establishmentRepository.merge(establishment, updateEstablishmentDto);
    return await this.establishmentRepository.save(establishment);
  }

  async remove(id: string) {
    return await this.establishmentRepository.delete({ id });
  }
}
