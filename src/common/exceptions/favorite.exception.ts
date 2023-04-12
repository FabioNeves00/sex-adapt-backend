import { HttpException, HttpStatus } from '@nestjs/common';

export class FavoriteException extends HttpException {
  constructor(error: string) {
    super(error, HttpStatus.CONFLICT);
  }
}
