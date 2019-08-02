import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Max, Min, Length, IsOptional } from 'class-validator';

export class UserDto {
  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  userName: string;

  @ApiModelProperty({ required: false })
  @IsString()
  @IsOptional()
  // 密码暂且可以为空
  password?: string;

  @ApiModelProperty({ required: false })
  @IsString()
  @IsOptional()
  haedImg?: string;

  @ApiModelProperty({ maxLength: 11, minLength: 11 })
  @IsString()
  @IsNotEmpty()
  @Length(11, 11)
  // 手机号应该是必填的
  mobile: string;
}
