import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { UserDto } from '../dto/UserDto';
import { Repository } from 'typeorm';
import { ListAllEntities } from '../dto/ListAllEntities';
import { randomHandler } from '../utils/random.handler';
import { ConfigService } from '../config.service';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly configService: ConfigService) { }

    async create(user: UserDto): Promise<User> {
        const result = await this.userRepository.save(user);
        return result;
    }

    async findOne(query) {
        const result = await this.userRepository.findOne({
            where: query,
        });
        return result;
    }

    async findAll(query: ListAllEntities) {
        console.log(this.configService.get('app.port'));
        const result = await this.userRepository.findAndCount({
            skip: query.offset,
            take: query.limit,
        });
        return {
            count: result[1],
            rows: result[0],
        };
    }

    async update(id: number, user) {
        const result = await this.userRepository.update(id, user);
        return result;
    }
}
