import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post, User } from '../../entity/entity';
/**
 *  文章模块
 */
@Module({
    imports: [UserModule, TypeOrmModule.forFeature([Post, User])],
    controllers: [PostController],
    providers: [PostService],
})
export class PostModule { }
