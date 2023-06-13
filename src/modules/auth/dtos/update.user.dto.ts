import { IsBase64, IsEmail,  MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {

  @IsEmail()
  public email!: string;

  @MinLength(5)
  @MaxLength(20)
  public password!: string;

  @MaxLength(64)
  public first_name!: string;

  @MaxLength(64)
  public last_name!: string;

  @IsBase64({})
  public image!: Buffer ;

}
