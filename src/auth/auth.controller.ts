import { CreateUserDto } from './../models/user/dto/create-user.dto';
import { RefreshTokenGuard } from './../common/guards/refresh-token.guard';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  Post,
  UseGuards
} from '@nestjs/common';
import {
  Public,
  GetCurrentUserId,
  GetCurrentUser
} from '../common/decorators';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth Routes')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('local/signup')
  signup_local(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup_local(createUserDto);
  }

  @Public()
  @Post('local/signin')
  signin_local(@Body() authDto: AuthDto) {
    return this.authService.signin_local(authDto);
  }

  @Post('logout')
  @ApiBearerAuth()
  logout(@GetCurrentUserId() userId: string) {
    return this.authService.logout(userId);
  }

  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  @ApiBearerAuth()
  refresh_token(
    @GetCurrentUserId() userId: string,
    @GetCurrentUser('refreshToken') refreshToken: string
  ) {
    return this.authService.updateRefreshToken(userId, refreshToken);
  }
}
