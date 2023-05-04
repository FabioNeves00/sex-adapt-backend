import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
  Query
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { GetCurrentUserId } from '../../common/decorators';
import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';
import { ApiKeyGuard } from '../../common/guards/auth-key.guard';

@ApiTags('Review Routes')
@ApiBearerAuth()
@Controller('review')
@UseGuards(new ApiKeyGuard('CLIENT'))
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @ApiHeader({ required: true, name: 'x_api_key' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @GetCurrentUserId() userId: string,
    @Body() createReviewDto: CreateReviewDto
  ) {
    return await this.reviewService.create(userId, createReviewDto);
  }

  @ApiHeader({ required: true, name: 'x_api_key' })
  @Get()
  async findAll(@Param('establishment') establishmentId: string) {
    return this.reviewService.findAll(establishmentId);
  }

  @ApiHeader({ required: true, name: 'x_api_key' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.reviewService.findOneOrFail({ where: { id } });
  }

  @ApiHeader({ required: true, name: 'x_api_key' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.reviewService.remove(id);
  }
}
