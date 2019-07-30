import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { ApiException } from '../exceptions/api.exception';

@Catch(HttpException)
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus()
    let message = exception.message.message? exception.message.message : exception.message
    let errorCode = exception.errorCode
    if(exception.message.error==='Bad Request'){
      message = exception.message.message[0].constraints
      errorCode = 400
    }
    let code = errorCode || 200

    response
      .status(status)
      .json({
        code,
        message
      });
  }
}
