import { IsEmail, IsNotEmpty, IsString   } from 'class-validator';

export class AuthDto {

  @IsNotEmpty()
  @IsEmail()
  public email!: string;

  @IsNotEmpty()
  @IsString()
  public password!: string;

}
