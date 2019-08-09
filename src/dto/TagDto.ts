import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class TagDto {
    @ApiModelProperty({ required: false })
    @IsString()
    tag: string;
}
