import { CreateSuportDto } from './dto/create-suport.dto';
import { SuportService } from './suport.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { GetCurrentUserId } from '../../common/decorators';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ApiKeyGuard } from '../../common/guards/auth-key.guard';

@ApiTags('Support Routes')
@ApiBearerAuth()
@Controller('suport')
@UseGuards(new ApiKeyGuard('CLIENT'))
export class SuportController {
  constructor(private readonly suportService: SuportService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @GetCurrentUserId() userId: string,
    @Body() createSuportDto: CreateSuportDto
  ) {
    return await this.suportService.create(userId, createSuportDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suportService.findOneOrFail({ where: { id } });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suportService.remove(id);
  }
}
