import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { SuggestEstablishmentService } from './suggest-establishment.service';
import { CreateSuggestEstablishmentDto } from './dto/create-suggest-establishment.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { GetCurrentUserId } from '../../common/decorators';
import { ApiKeyGuard } from '../../common/guards/auth-key.guard';

@ApiTags('Suggestion Routes')
@ApiBearerAuth()
@Controller('suggest')
@UseGuards(new ApiKeyGuard('CLIENT'))
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
