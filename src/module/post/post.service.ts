import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post, User } from '../../entity/entity';
import { PostDto } from '../../dto/Dto';
import { Repository } from 'typeorm';
import { ApiException, ApiErrorCode } from '../../common/common';

@Injectable()
export class PostService {

    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async create(post: PostDto): Promise<Post> {
        let user = await this.userRepository.findOne(post.userId);
        if (!user) { throw new ApiException('User is not exists', ApiErrorCode.USERISNOTEXISTS, HttpStatus.OK); }
        let postEntity = new Post();
        postEntity.img = post.img;
        postEntity.content = post.content;
        postEntity.user = user;
        const result = await this.postRepository.save(post);
        return result;
    }
}
