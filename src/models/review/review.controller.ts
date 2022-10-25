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
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { GetCurrentUserId } from 'src/common/decorators';
import { RefreshTokenGuard } from '@guards/refresh-token.guard';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @GetCurrentUserId() userId: string,
    @Body() createReviewDto: CreateReviewDto
  ) {
    return await this.reviewService.create(userId, createReviewDto);
  }

  @Get()
  findAll() {
    return this.reviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewService.findOneOrFail({ where: { id } });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewService.remove(id);
  }
}
