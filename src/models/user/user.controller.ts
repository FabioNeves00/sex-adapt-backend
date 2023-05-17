import { FavoriteService } from './../../providers/favorite/favorite.service';
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
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetCurrentUserId } from '../../common/decorators';
import { SuggestionService } from '../../providers/suggestion/suggestion.service';
import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';
import { ApiKeyGuard } from '../../common/guards/auth-key.guard';
import { AccessTokenGuard } from '@guards/access-token.guard';

@ApiTags('User Routes')
@ApiBearerAuth()
@Controller('user')
@UseGuards(new ApiKeyGuard('CLIENT'))
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly favoriteService: FavoriteService,
    private readonly suggestionService: SuggestionService
  ) {}

  @ApiHeader({ required: true, name: 'x_api_key' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @ApiHeader({ required: true, name: 'x_api_key' })
  @Delete('/deleteById/:id')
  removeById(@Param('id') id: string) {
    return this.userService.removeById(id);
  }

  @ApiHeader({ required: true, name: 'x_api_key' })
  @UseGuards(AccessTokenGuard)
  @Get('/suggestion')
  async generateSuggestions(@GetCurrentUserId() userId: string) {
    return await this.suggestionService.generateUserSuggestions(userId);
  }

  @ApiHeader({ required: true, name: 'x_api_key' })
  @UseGuards(AccessTokenGuard)
  @Get('/favorites')
  async getFavorites(@GetCurrentUserId() userId: string) {
    return await this.favoriteService.getUserFavorites(userId);
  }

  @ApiHeader({ required: true, name: 'x_api_key' })
  @Post('/favorites/:id')
  async favorite(
    @GetCurrentUserId() userId: string,
    @Param('id') establishmentId: string
  ) {
    return await this.favoriteService.favorite(userId, establishmentId);
  }

  @ApiHeader({ required: true, name: 'x_api_key' })
  @Delete('/favorites/:id')
  async unfavorite(
    @GetCurrentUserId() userId: string,
    @Param('id') establishmentId: string
  ) {
    return await this.favoriteService.unfavorite(userId, establishmentId);
  }
}
