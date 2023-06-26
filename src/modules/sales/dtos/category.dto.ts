import { ApiProperty } from '@nestjs/swagger';
import { IsBase64, IsString, IsUUID } from 'class-validator';

export class CategoryDto {

  @ApiProperty()
  @IsUUID()
  public id!: string;

  @ApiProperty()
  @IsString()
  public name!: string;

  @ApiProperty()
  @IsBase64({})
  public image!: Buffer;

}
