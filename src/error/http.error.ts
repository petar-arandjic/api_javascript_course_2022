import { ApiProperty } from '@nestjs/swagger';

export class HttpError {
  @ApiProperty({ example: 'ERROR_MESSAGE_KEY' })
  key: string;

  @ApiProperty({ example: 'error message details' })
  message: string;
}
