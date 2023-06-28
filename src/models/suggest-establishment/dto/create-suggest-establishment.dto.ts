import { HttpCustomMessages } from './../../../common/helpers/exceptions/messages/index.messages';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSuggestEstablishmentDto {
  @IsString({ message: HttpCustomMessages.VALIDATION.NAME.INVALID })
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.NAME.REQUIRED })
  name: string;

  @IsString({ message: HttpCustomMessages.VALIDATION.CATEGORY.INVALID })
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.CATEGORY.REQUIRED })
  category: string;

  @IsString({ message: HttpCustomMessages.VALIDATION.ADDRESS.INVALID })
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.ADDRESS.REQUIRED })
  address: string;

  @IsString({ message: HttpCustomMessages.VALIDATION.LANDLINE.INVALID })
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.LANDLINE.INVALID })
  landline: string;

  @IsString({ message: HttpCustomMessages.VALIDATION.PRICE.INVALID })
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.PRICE.INVALID })
  price: string;

  @IsBoolean({ message: 'ground_floor_room deve ser um boolean.' })
  ground_floor_room: boolean;

  @IsString({ message: HttpCustomMessages.VALIDATION.WEBSITE.INVALID })
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.WEBSITE.REQUIRED })
  @IsOptional()
  website: string;

  @IsBoolean({ message: 'elevator deve ser um boolean.' })
  elevator: boolean;

  @IsBoolean({ message: 'bar deve ser um boolean.' })
  bar: boolean;

  @IsBoolean({ message: 'unevenness deve ser um boolean.' })
  unevenness: boolean;

  @IsBoolean({ message: 'incompatible_dimensions deve ser um boolean.' })
  incompatible_dimensions: boolean;

  @IsBoolean({ message: 'sign_language deve ser um boolean.' })
  sign_language: boolean;

  @IsBoolean({ message: 'tactile_floor deve ser um boolean.' })
  tactile_floor: boolean;

  @IsBoolean({ message: 'braille deve ser um boolean.' })
  braille: boolean;
}
