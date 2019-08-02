import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../entity/user.entity';
import { UserDto } from '../../dto/UserDto';
import { ListAllEntities } from '../../dto/ListAllEntities';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async create(@Body() user: UserDto): Promise<User> {
        return await this.userService.create(user);
    }

    @Get('list')
    async findAll(@Query() query: ListAllEntities) {
        const result = await this.userService.findAll(query);
        return result;
    }
}
