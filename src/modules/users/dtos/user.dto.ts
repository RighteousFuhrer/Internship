import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsBase64,
  IsAlpha,
  IsString,
  IsOptional,
  IsUUID,
} from 'class-validator';

export class UserDto {

  @ApiProperty()
  @IsUUID()
  public id!: string;

  @ApiProperty()
  @IsEmail()
  public email!: string;

  @ApiProperty()
  @IsBase64()
  public image!: Buffer;

  @ApiProperty()
  @IsAlpha()
  public first_name!: string;

  @ApiProperty()
  @IsAlpha()
  public last_name!: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  public hashedRt!: string | null;

}
