import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag, User } from '../../entity/entity';
/**
 *  文章模块
 */
@Module({
    imports: [UserModule, TypeOrmModule.forFeature([Tag, User])],
    controllers: [TagController],
    providers: [TagService],
    exports: [TagService],
})
export class TagModule { }
