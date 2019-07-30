import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { threeData as threeData} from 'config';
import { app as appConfig } from 'config'
import { ApiException } from '../common/exceptions/api.exception'
import { ApiErrorCode } from '../common/enums/api-error-code.enum'
import { User } from '../entity/user.entity'
import { UserDto } from '../dto/UserDto'
import { Repository } from 'typeorm';
import { ListAllEntities } from '../dto/ListAllEntities'
import { randomHandler } from '../utils/random.handler'

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>){}

    async create(user: UserDto): Promise<User> {
        user.key = randomHandler.genRandomKey()
        const result = await this.userRepository.save(user)
        return result
    }

    async findOne(query) {
        const result = await this.userRepository.findOne({
            where:query
        })
        return result
    }

    async findAll(query: ListAllEntities) {
        const result = await this.userRepository.findAndCount({
            skip: query.offset,
            take: query.limit
        })
        return {
            count: result[1],
            rows: result[0]
        }
    }

    async update(id: number , user) {
        const result = await this.userRepository.update(id,user)
        return result
    }
}
