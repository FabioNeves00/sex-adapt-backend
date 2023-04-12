import { CreateAccessibilityDto } from '@models/accessibility/dto/create-accessibility.dto';
import { Type } from 'class-transformer';
import { HttpCustomMessages } from '../../../common/helpers/exceptions/messages/index.messages';
import { UserEntity } from '../../user/entities/user.entity';
import {
  IsArray,
  IsBoolean,
  IsDefined,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Matches,
  ValidateNested
} from 'class-validator';
import { ApiHideProperty } from '@nestjs/swagger';

export class CreateEstablishmentDto {
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateAccessibilityDto)
  accessibilities: CreateAccessibilityDto;

  @ApiHideProperty()
  favoritedBy: UserEntity[] | null;

  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.NAME.REQUIRED })
  @IsString({ message: HttpCustomMessages.VALIDATION.NAME.INVALID })
  name: string;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: HttpCustomMessages.VALIDATION.PRICE.INVALID }
  )
  price: number;

  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.CATEGORY.REQUIRED })
  @IsString({ message: HttpCustomMessages.VALIDATION.CATEGORY.INVALID })
  category: string;

  @IsOptional()
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.WEBSITE.REQUIRED })
  @IsString({ message: HttpCustomMessages.VALIDATION.WEBSITE.INVALID })
  website: string;

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

  @IsBoolean({
    message: HttpCustomMessages.VALIDATION.GROUND_FLOOR_ROOM.INVALID
  })
  ground_floor_room: boolean;

  @IsString()
  @IsLatitude()
  latitude: string;

  @IsString()
  @IsLongitude()
  longitude: string;

  @IsNotEmpty()
  @IsString()
  cover_photo: string;

  @IsNotEmpty()
  @IsArray()
  room_photo: string[];

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
