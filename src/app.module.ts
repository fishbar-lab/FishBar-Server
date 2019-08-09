import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db } from 'config';
import { ConfigModule } from './config.module';
import { PostModule, UserModule, TagModule } from './module/module';
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
    // tslint:disable-next-line:trailing-comma
    ConfigModule,
    UserModule,
    PostModule,
    TagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(BalanceMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
