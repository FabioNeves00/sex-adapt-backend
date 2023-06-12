import { Public } from '../common/decorators';
import { CreateRecoverPasswordDto } from '../models/recover-password';
import { ChangePasswordDto } from '../models/recover-password/dto/change-password.dto';
import { ConfirmTokenDto } from '../models/recover-password/dto/confirm-token.dto';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  UseGuards
} from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { RecoverPasswordService } from '../providers/recover-password/recover-password.service';
import { ApiKeyGuard } from '../common/guards/auth-key.guard';

@ApiTags('Recover Routes')
@Public()
@Controller('auth/recover')

export class RecoverController {
  constructor(private recoverService: RecoverPasswordService) {}

  @ApiHeader({ required: true, name: 'x_api_key' })
  @Post()
  async recoverPassword(@Body() recoverPasswordDto: CreateRecoverPasswordDto) {
    return await this.recoverService.create(recoverPasswordDto);
  }

  @ApiHeader({ required: true, name: 'x_api_key' })
  @Post('confirm')
  async confirmToken(@Body() confirmTokenDto: ConfirmTokenDto) {
    return await this.recoverService.confirmToken(confirmTokenDto);
  }

  @ApiHeader({ required: true, name: 'x_api_key' })
  @Put('changePassword')
  async changePassword(@Body() changePasswordDto: ChangePasswordDto) {
    return await this.recoverService.changePassword(changePasswordDto);
  }
}
