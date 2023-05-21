import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query
} from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';
import { GetCurrentUserId, Public } from '../../common/decorators';
import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';
import { ApiKeyGuard } from '../../common/guards/auth-key.guard';
import { AccessTokenGuard } from '@guards/access-token.guard';
import { GeolibInputCoordinates } from 'geolib/es/types';

@ApiTags('Establishment Routes')
@ApiBearerAuth()
@Public()
@UseGuards(new ApiKeyGuard('CLIENT'))
@Controller('establishment')
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) {}

  @ApiHeader({ required: true, name: 'x_api_key' })
  @Post()
  async create(@Body() createEstablishmentDto: CreateEstablishmentDto) {
    return await this.establishmentService.create(createEstablishmentDto);
  }

  @ApiHeader({ required: true, name: 'x_api_key' })
  @UseGuards(AccessTokenGuard)
  @Get()
  findAll(
    @GetCurrentUserId() userId: string,
    @Body('userCoordinates') userCoordinates: GeolibInputCoordinates, 
    @Query('distance') distance?: string,
    @Query('price') price?: string
  ) {
    return this.establishmentService.findAll(userId, { price, distance, userCoordinates });
  }

  @ApiHeader({ required: true, name: 'x_api_key' })
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  findOne(
    @Param('id') id: string,
    @GetCurrentUserId() userId: string,
  ) {
    return this.establishmentService.findOneOrFail({ where: { id } }, userId);
  }

  @ApiHeader({ required: true, name: 'x_api_key' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEstablishmentDto: UpdateEstablishmentDto
  ) {
    return this.establishmentService.update(id, updateEstablishmentDto);
  }

  @ApiHeader({ required: true, name: 'x_api_key' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.establishmentService.remove(id);
  }
}
