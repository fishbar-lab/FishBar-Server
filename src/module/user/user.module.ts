import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ConfigModule } from '../../config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entity/entity';
/**
 *  用户模块
 */
@Module({
    imports: [ConfigModule, TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule { }
