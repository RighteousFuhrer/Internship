import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class SearchByCategoryIdDto {

  @ApiProperty()
  @IsUUID()
  public categoryId!: string;

}
