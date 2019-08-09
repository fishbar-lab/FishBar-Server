import { Controller, Post, Body, Headers } from '@nestjs/common';
import { TagService } from './tag.service';
import { Tag as TagEntity } from '../../entity/entity';
import { TagDto, HeaderDto } from '../../dto/Dto';

@Controller('tags')
export class TagController {
    constructor(private readonly tagService: TagService) { }

    @Post()
    async create(@Body() tag: TagDto, @Headers() header: HeaderDto): Promise<TagEntity> {
        let tagEntity = new TagEntity();
        // tslint:disable-next-line:radix
        tagEntity.tag = tag.tag;
        tagEntity.userId = header.x_userid;
        // tagEntity.userId = parseInt(userId);
        return await this.tagService.create(tagEntity);
    }
}
