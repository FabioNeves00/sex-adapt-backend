import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSuggestEstablishmentDto } from './dto/create-suggest-establishment.dto';
import { SuggestEstablishmentEntity } from './entities/suggest-establishment.entity';
import { Repository } from 'typeorm';
import { IUserEntity } from '../user/interfaces/user.interface';

@Injectable()
export class SuggestEstablishmentService {
  constructor(
    @InjectRepository(SuggestEstablishmentEntity)
    private suggestionRepository: Repository<SuggestEstablishmentEntity>
  ) {}

  async create(
    createSuggestEstablishmentDto: CreateSuggestEstablishmentDto,
    user: string
  ) {
    const suggestion = this.suggestionRepository.create({
      ...createSuggestEstablishmentDto,
      suggestedBy: user as unknown as IUserEntity
    });
    return await this.suggestionRepository.save(suggestion);
  }

  async findAll() {
    return await this.suggestionRepository.find({});
  }

  async findOne(id: string) {
    return await this.suggestionRepository.findOneBy({ id });
  }
}
