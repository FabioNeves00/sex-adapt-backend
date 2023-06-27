import { CreateUserDto } from './../models/user/dto/create-user.dto';
import { RefreshTokenGuard } from './../common/guards/refresh-token.guard';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Public, GetCurrentUserId, GetCurrentUser } from '../common/decorators';
import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';
import { ApiKeyGuard } from '../common/guards/auth-key.guard';

@ApiTags('Auth Routes')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @ApiHeader({ required: true, name: 'x_api_key' })
  @Post('local/signup')
  signup_local(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup_local(createUserDto);
  }

  @Public()
  @ApiHeader({ required: true, name: 'x_api_key' })
  @Post('local/signin')
  signin_local(@Body() authDto: AuthDto) {
    return this.authService.signin_local(authDto);
  }

  @Post('logout')
  @ApiHeader({ required: true, name: 'x_api_key' })
  @ApiBearerAuth()
  logout(@GetCurrentUserId() userId: string) {
    return this.authService.logout(userId);
  }

  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  @ApiHeader({ required: true, name: 'x_api_key' })
  @ApiBearerAuth()
  refresh_token(
    @GetCurrentUserId() userId: string,
    @GetCurrentUser('refreshToken') refreshToken: string
  ) {
    return this.authService.updateRefreshToken(userId, refreshToken);
  }
}
