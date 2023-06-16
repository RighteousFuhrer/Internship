import {
  IsEmail,
  IsBase64,
  IsAlpha,
  IsString,
  IsOptional,
  IsUUID,
} from 'class-validator';

export class UserDto {

  @IsUUID()
  public id!: string;

  @IsEmail()
  public email!: string;

  @IsBase64()
  public image!: Buffer;

  @IsAlpha()
  public first_name!: string;

  @IsAlpha()
  public last_name!: string;

  @IsString()
  @IsOptional()
  public hashedRt!: string | null;

}
