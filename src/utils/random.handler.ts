import * as cryptoRandomString from 'crypto-random-string'
import { Injectable } from '@nestjs/common';


@Injectable()
export class randomHandler {
    static genRandomKey(): string {
        return cryptoRandomString({length: 30, characters:'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'})
    }
}
