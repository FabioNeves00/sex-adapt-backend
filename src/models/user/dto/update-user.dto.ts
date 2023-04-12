import { CreateAccessibilityDto } from '@models/accessibility/dto/create-accessibility.dto';
import { EstablishmentEntity } from '@models/establishment/entities/establishment.entity';
import { ApiHideProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  Matches,
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  ValidateNested,
  IsOptional
} from 'class-validator';
import { HttpCustomMessages } from '../../../common/helpers/exceptions/messages/index.messages';

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.EMAIL.INVALID })
  @IsString({ message: HttpCustomMessages.VALIDATION.EMAIL.INVALID })
  @IsEmail({ message: HttpCustomMessages.VALIDATION.EMAIL.REQUIRED })
  email?: string;

  @IsOptional()
  @IsString({ message: HttpCustomMessages.VALIDATION.PASSWORD.INVALID })
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.PASSWORD.REQUIRED })
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
    message: HttpCustomMessages.VALIDATION.PASSWORD.WEAK
  })
  password?: string;

  @IsOptional()
  @IsString({ message: HttpCustomMessages.VALIDATION.NAME.INVALID })
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.NAME.REQUIRED })
  name?: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateAccessibilityDto)
  accessibilities?: CreateAccessibilityDto;

  @IsOptional()
  @ApiHideProperty()
  hashedRefreshToken?: string | null;
  @IsOptional()
  @ApiHideProperty()
  favorites?: null | EstablishmentEntity[];
}
