import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { UserModule } from '../user/user.module';
import { TagModule } from '../tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post, User, Tag } from '../../entity/entity';
/**
 *  文章模块
 */
@Module({
    imports: [UserModule, TagModule, TypeOrmModule.forFeature([Post, User, Tag])],
    controllers: [PostController],
    providers: [PostService],
})
export class PostModule { }
