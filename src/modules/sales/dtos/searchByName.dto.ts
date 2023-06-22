import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SearchByNameDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public name!: string;

}
