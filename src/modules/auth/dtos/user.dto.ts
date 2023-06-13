import { IsEmail, IsNumber, IsBase64, IsAlpha, IsString, IsOptional } from 'class-validator';

export class UserDto {

  @IsNumber()
  public id!: number;

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
