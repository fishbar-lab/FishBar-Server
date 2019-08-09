import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag, User } from '../../entity/entity';
import { Repository } from 'typeorm';
import { ApiException, ApiErrorCode } from '../../common/common';

@Injectable()
export class TagService {

    constructor(
        @InjectRepository(Tag)
        private readonly postRepository: Repository<Tag>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async create(tag: Tag): Promise<Tag> {
        let user = await this.userRepository.findOne(tag.userId);
        if (!user) { throw new ApiException('User is not exists', ApiErrorCode.USERISNOTEXISTS, HttpStatus.OK); }
        tag.user = user;
        const result = await this.postRepository.save(tag);
        return result;
    }
}
