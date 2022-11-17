import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty({ example: 'Ana' })
  firstname: string;

  @ApiProperty({ example: 'Radic' })
  lastname: string;

  @ApiProperty({ example: 'ana.radic@js.com' })
  email: string;
}
