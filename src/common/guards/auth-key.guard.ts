import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CustomRequest } from '../../@types';
import { isApiKeyValid } from '../../utils/isApiKeyValid';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly keyType: 'DEV' | 'CLIENT') {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: CustomRequest = context.switchToHttp().getRequest();

    switch (this.keyType) {
      case 'CLIENT':
        return (
          isApiKeyValid(request.headers.x_api_key, 'DEV') ||
          isApiKeyValid(request.headers.x_api_key, 'CLIENT')
        );
      case 'DEV':
        return isApiKeyValid(request.headers.x_api_key, 'DEV');
    }
  }
}
