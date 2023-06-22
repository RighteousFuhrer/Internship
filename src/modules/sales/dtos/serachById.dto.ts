import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class SearchByIdDto {

  @ApiProperty()
  @IsUUID()
  public id!: string;

}
