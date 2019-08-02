import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Max, Min, Length, IsOptional, IsNumber } from 'class-validator';

export class PostDto {
    @ApiModelProperty()
    @IsNumber()
    userId: number;

    @ApiModelProperty({ required: false })
    @IsString()
    @IsOptional()
    img?: string;

    @ApiModelProperty()
    @IsString()
    content: string;
}
