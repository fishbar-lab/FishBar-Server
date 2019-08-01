import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db } from 'config';
import { Connection } from 'typeorm';
import { User, Post } from './entity/entity';
import { ConfigModule } from './config.module';
import { BalanceMiddleware } from './common/middleware/balance.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: db.options.host,
      port: db.options.port,
      username: db.options.user,
      password: db.options.pass,
      database: db.database,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([User, Post]),
    // tslint:disable-next-line:trailing-comma
    ConfigModule
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(BalanceMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
