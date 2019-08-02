import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpStatus } from '@nestjs/common';
import { ApiException } from '../exceptions/api.exception';

@Injectable()
export class TransformInterceptor
  implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    return next.handle().pipe(tap((data) => {
      if (data && data.pass) {
        delete data.pass;
      }
      if (data && data.rows) {
        for (let row of data.rows) {
          if (row.pass) {
            delete row.pass;
          }
        }
      }
      if (data && data.code && data.code !== 0) {
        throw new ApiException(data.message, data.code, HttpStatus.OK);
      } else {
        return data;
      }
    }),
    );
  }
}
