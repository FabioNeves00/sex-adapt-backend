import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SuggestEstablishmentService } from './suggest-establishment.service';
import { CreateSuggestEstablishmentDto } from './dto/create-suggest-establishment.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { GetCurrentUserId } from '@decorators/*';

@ApiTags('Suggestion Routes')
@ApiBearerAuth()
@Controller('suggest')
export class SuggestEstablishmentController {
  constructor(
    private readonly suggestEstablishmentService: SuggestEstablishmentService
  ) {}

  @Post()
  create(
    @Body() createSuggestEstablishmentDto: CreateSuggestEstablishmentDto,
    @GetCurrentUserId() user_id: string
  ) {
    return this.suggestEstablishmentService.create(
      createSuggestEstablishmentDto,
      user_id
    );
  }

  @Get()
  findAll() {
    return this.suggestEstablishmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suggestEstablishmentService.findOne(id);
  }
}
