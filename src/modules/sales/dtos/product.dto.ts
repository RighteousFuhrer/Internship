import { ApiProperty } from '@nestjs/swagger';
import { IsBase64, IsNumber, IsString, IsUUID } from 'class-validator';

import type { Category } from '../entities/category.entity';

export class ProductDto {

  @ApiProperty()
  @IsUUID()
  public id!: string;

  @ApiProperty()
  @IsString()
  public name!: string;

  @ApiProperty()
  @IsNumber()
  public price!: number;

  @ApiProperty()
  public total_sold?: number;

  @ApiProperty()
  @IsBase64()
  public image!: Buffer;

  @ApiProperty()
  @IsUUID()
  public category!: Category | null;

}
