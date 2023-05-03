import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID
} from 'class-validator';

export class CreateSuggestEstablishmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  landline: string;

  @IsString()
  @IsNotEmpty()
  price: string;

  @IsBoolean()
  ground_floor_room: boolean;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  website: string;

  @IsBoolean()
  elevator: boolean;

  @IsBoolean()
  bar: boolean;

  @IsBoolean()
  unevenness: boolean;

  @IsBoolean()
  incompatible_dimensions: boolean;

  @IsBoolean()
  sign_language: boolean;

  @IsBoolean()
  tactile_floor: boolean;

  @IsBoolean()
  braille: boolean;
}
