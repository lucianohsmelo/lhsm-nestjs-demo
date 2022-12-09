import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { ROLES_KEY } from 'src/roles.decorator';
import { verify } from 'jsonwebtoken';
import { Request } from 'express';
import { jwtConstants } from '../constants';

// @Injectable()
// export class CustomGuard implements CanActivate {
//   constructor(private reflector: Reflector) {}
//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const roles = this.reflector.get<string[]>(ROLES_KEY, context.getHandler());
//     console.log(roles);
//     const request = context.switchToHttp().getRequest();
//     console.log(request);
//     return true;
//   }
// }

@Injectable()
export class CustomGuard extends AuthGuard('custom') {
  constructor(private reflector: Reflector) {
    super();
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>(ROLES_KEY, context.getHandler());
    const request: Request = context.switchToHttp().getRequest();
    console.log(request.cookies['@secretKey']);
    try {
      const decoded = verify(
        request.cookies['@secretKey'],
        jwtConstants.secret,
        {
          ignoreExpiration: true,
        },
      );
      console.log(decoded);
      request.user = decoded['username'];
    } catch (error) {
      console.log(error);
      return false;
    }
    console.log(roles);

    return true;
  }
}
