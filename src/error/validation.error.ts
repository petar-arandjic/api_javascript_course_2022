import { ApiProperty } from '@nestjs/swagger';

export class ValidationErrors {
  @ApiProperty()
  message: string;

  @ApiProperty()
  field: string;
}

export class ValidationError {
  @ApiProperty({ example: 'NOT_FOUND' })
  key: string;

  @ApiProperty({ example: '[Resource] not found' })
  message: string;

  @ApiProperty({ type: [ValidationErrors] })
  errors: ValidationErrors[];
}
