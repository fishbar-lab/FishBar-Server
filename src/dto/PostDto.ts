import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class PostDto {
    @ApiModelProperty()
    @IsNumber()
    userId: number;

    @ApiModelProperty()
    tagId: number;

    @ApiModelProperty({ required: false })
    @IsString()
    @IsOptional()
    img?: string;

    @ApiModelProperty()
    @IsString()
    content: string;
}
