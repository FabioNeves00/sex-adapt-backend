import { HttpException, HttpStatus } from '@nestjs/common';

export class RecoverException extends HttpException {
  constructor(error: string) {
    super(error, HttpStatus.FORBIDDEN);
  }
}
