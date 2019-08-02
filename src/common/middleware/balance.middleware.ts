import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from '../../module/user/user.service';
import { ApiErrorCode } from '../enums/api-error-code.enum';
import { ApiException } from '../exceptions/api.exception';

@Injectable()
export class BalanceMiddleware implements NestMiddleware {
  constructor(
    private readonly userService: UserService,
  ) { }
  async use(req: Request, res: Response, next: Function) {
    // 中间件操作

    next();
  }
}
