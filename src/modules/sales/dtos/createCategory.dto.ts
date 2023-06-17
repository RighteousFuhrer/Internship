import { ApiProperty } from '@nestjs/swagger';
import { IsBase64, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public name!: string;

  @ApiProperty()
  @IsBase64({})
  public image!: Buffer;

}
