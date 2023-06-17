import { ApiProperty } from '@nestjs/swagger';
import { IsBase64, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class ProductDto {

  @ApiProperty()
  @IsUUID()
  public id!: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public name!: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  public price!: number;

  @ApiProperty()
  @IsNumber()
  public total_sold!: number;

  @ApiProperty()
  @IsBase64({})
  public image!: Buffer;

  @ApiProperty()
  @IsUUID()
  public categoryId!: string;

}
