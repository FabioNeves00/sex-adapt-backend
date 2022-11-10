import { Public } from '@decorators/*';
import { CreateRecoverPasswordDto } from '@models/recover-password';
import { ChangePasswordDto } from '@models/recover-password/dto/change-password.dto';
import { ConfirmTokenDto } from '@models/recover-password/dto/confirm-token.dto';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Put
} from '@nestjs/common';
import { RecoverPasswordService } from '@providers/recover-password/recover-password.service';

@Public()
@Controller('auth/recover')
export class RecoverController {
  constructor(private recoverService: RecoverPasswordService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async recoverPassword(@Body() recoverPasswordDto: CreateRecoverPasswordDto) {
    // return recoverPasswordDto;
    return await this.recoverService.create(recoverPasswordDto);
  }

  @Post('confirm')
  @HttpCode(HttpStatus.OK)
  async confirmToken(@Body() confirmTokenDto: ConfirmTokenDto) {
    return await this.recoverService.confirmToken(confirmTokenDto);
  }

  @Put('changePassword')
  @HttpCode(HttpStatus.OK)
  async changePassword(@Body() changePasswordDto: ChangePasswordDto) {
    return await this.recoverService.changePassword(changePasswordDto);
  }
}
