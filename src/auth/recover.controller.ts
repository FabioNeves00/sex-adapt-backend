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
  Put
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RecoverPasswordService } from '../providers/recover-password/recover-password.service';

@ApiTags('Recover Routes')
@Public()
@Controller('auth/recover')
export class RecoverController {
  constructor(private recoverService: RecoverPasswordService) {}

  @Post()
  async recoverPassword(@Body() recoverPasswordDto: CreateRecoverPasswordDto) {
    return await this.recoverService.create(recoverPasswordDto);
  }

  @Post('confirm')
  async confirmToken(@Body() confirmTokenDto: ConfirmTokenDto) {
    return await this.recoverService.confirmToken(confirmTokenDto);
  }

  @Put('changePassword')
  async changePassword(@Body() changePasswordDto: ChangePasswordDto) {
    return await this.recoverService.changePassword(changePasswordDto);
  }
}
