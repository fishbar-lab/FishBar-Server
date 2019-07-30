import { CanActivate, ExecutionContext, Injectable, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import * as _ from 'lodash'
import { ApiErrorCode }  from '../enums/api-error-code.enum'
import { ApiException } from '../exceptions/api.exception'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) { }

  canActivate(
    ctx: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    let roles = this.reflector.get<string[]>('roles', ctx.getHandler())
    // 没有设置守卫 直接通过
    if(!roles) return true;

    const { headers: { key } } = ctx.switchToHttp().getRequest();
    if(!(roles && roles.length > 0 && key)){
      throw new ApiException('需要key', ApiErrorCode.NEEDKEY, HttpStatus.OK);
    }

    return true;
  }
}