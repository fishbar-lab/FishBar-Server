import { Controller, Post, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostEntity } from '../../entity/entity';
import { PostDto } from '../../dto/Dto';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) { }

    @Post()
    async create(@Body() post: PostDto): Promise<PostEntity> {
        return await this.postService.create(post);
    }
}
