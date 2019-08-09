import { ApiModelProperty } from '@nestjs/swagger';

export class HeaderDto {
    @ApiModelProperty({ required: false })
    // tslint:disable-next-line:variable-name
    x_userid: number;
}
