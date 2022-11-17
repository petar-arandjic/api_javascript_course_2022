import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDTO {
  @ApiProperty({ example: 'Ana' })
  firstname: string;

  @ApiProperty({ example: 'Radic' })
  lastname: string;
}