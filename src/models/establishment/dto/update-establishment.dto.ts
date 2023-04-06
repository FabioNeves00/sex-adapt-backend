import { CreateAccessibilityDto } from '@models/accessibility/dto/create-accessibility.dto';
import { UserEntity } from '@models/user/entities/user.entity';
import { PartialType } from '@nestjs/mapped-types';
import { ApiHideProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  ValidateNested,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsLatitude,
  IsLongitude,
  IsArray,
  Matches
} from 'class-validator';
import { HttpCustomMessages } from 'src/common/helpers/exceptions/messages/index.messages';
import { CreateEstablishmentDto } from './create-establishment.dto';

export class UpdateEstablishmentDto {
  @IsOptional()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateAccessibilityDto)
  accessibilities: CreateAccessibilityDto;

  @IsOptional()
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.NAME.REQUIRED })
  @IsString({ message: HttpCustomMessages.VALIDATION.NAME.INVALID })
  name: string;

  @IsOptional()
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: HttpCustomMessages.VALIDATION.PRICE.INVALID }
  )
  price: number;

  @IsOptional()
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.CATEGORY.REQUIRED })
  @IsString({ message: HttpCustomMessages.VALIDATION.CATEGORY.INVALID })
  category: string;

  @IsOptional()
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.WEBSITE.REQUIRED })
  @IsString({ message: HttpCustomMessages.VALIDATION.WEBSITE.INVALID })
  website: string;

  @IsOptional()
  @IsObject({ message: HttpCustomMessages.VALIDATION.ADDRESS.INVALID })
  @IsDefined()
  @IsNotEmptyObject(
    { nullable: false },
    { message: HttpCustomMessages.VALIDATION.ADDRESS.REQUIRED }
  )
  @ValidateNested({ each: true })
  address: {
    street: string;
    number: string;
    complement: string;
    cep: string;
  };

  @IsOptional()
  @IsBoolean({
    message: HttpCustomMessages.VALIDATION.GROUND_FLOOR_ROOM.INVALID
  })
  ground_floor_room: boolean;

  @IsOptional()
  @IsString()
  @IsLatitude()
  latitude: string;

  @IsOptional()
  @IsString()
  @IsLongitude()
  longitude: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  cover_photo: string;

  @IsOptional()
  @IsNotEmpty()
  @IsArray()
  room_photo: string[];

  @IsOptional()
  @Matches(
    /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/,
    { message: HttpCustomMessages.VALIDATION.LANDLINE.INVALID }
  )
  landline: string;

  @IsOptional()
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.WHATSAPP.REQUIRED })
  @IsString({ message: HttpCustomMessages.VALIDATION.WHATSAPP.INVALID })
  whatsapp: string;
}
