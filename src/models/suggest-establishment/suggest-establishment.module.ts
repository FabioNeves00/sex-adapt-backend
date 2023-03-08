import { Module } from '@nestjs/common';
import { SuggestEstablishmentService } from './suggest-establishment.service';
import { SuggestEstablishmentController } from './suggest-establishment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuggestEstablishmentEntity } from './entities/suggest-establishment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SuggestEstablishmentEntity])],
  controllers: [SuggestEstablishmentController],
  providers: [SuggestEstablishmentService]
})
export class SuggestEstablishmentModule {}
