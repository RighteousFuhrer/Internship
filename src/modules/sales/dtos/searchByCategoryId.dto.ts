import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class ProductSearchParams {

  @ApiProperty()
  @IsUUID()
  public categoryId?: string;

  @ApiProperty()
  @IsString()
  public name?: string;

}
