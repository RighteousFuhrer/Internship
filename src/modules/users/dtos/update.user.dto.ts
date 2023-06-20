import { ApiProperty } from '@nestjs/swagger';
import { IsBase64, IsEmail, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {

  @ApiProperty()
  @IsEmail()
  public email!: string;

  @ApiProperty()
  @MinLength(5)
  @MaxLength(20)
  public password!: string;

  @ApiProperty()
  @MaxLength(64)
  public first_name!: string;

  @ApiProperty()
  @MaxLength(64)
  public last_name!: string;

  @ApiProperty()
  @IsBase64({})
  public image!: Buffer;

}
