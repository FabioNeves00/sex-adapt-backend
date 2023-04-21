import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { SuggestEstablishmentService } from './suggest-establishment.service';
import { CreateSuggestEstablishmentDto } from './dto/create-suggest-establishment.dto';
import { ApiTags, ApiBearerAuth, ApiHeader } from '@nestjs/swagger';
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

  @ApiHeader({ required: true, name: 'x_api_key' })
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

  @ApiHeader({ required: true, name: 'x_api_key' })
  @Get()
  findAll() {
    return this.suggestEstablishmentService.findAll();
  }

  @ApiHeader({ required: true, name: 'x_api_key' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suggestEstablishmentService.findOne(id);
  }
}
