import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards
} from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';
import { Public } from '../../common/decorators';
import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';
import { ApiKeyGuard } from '../../common/guards/auth-key.guard';

@ApiTags('Establishment Routes')
@ApiBearerAuth()
@Public()
@UseGuards(new ApiKeyGuard('CLIENT'))
@Controller('establishment')
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) {}

  @ApiHeader({ required: true, name: 'api' })
  @Post()
  async create(@Body() createEstablishmentDto: CreateEstablishmentDto) {
    return await this.establishmentService.create(createEstablishmentDto);
  }

  @ApiHeader({ required: true, name: 'api' })
  @Get()
  findAll() {
    return this.establishmentService.findAll();
  }

  @ApiHeader({ required: true, name: 'api' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.establishmentService.findOneOrFail({ where: { id } });
  }

  @ApiHeader({ required: true, name: 'api' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEstablishmentDto: UpdateEstablishmentDto
  ) {
    return this.establishmentService.update(id, updateEstablishmentDto);
  }

  @ApiHeader({ required: true, name: 'api' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.establishmentService.remove(id);
  }
}
