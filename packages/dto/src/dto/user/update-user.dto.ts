import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateUserDto {
    @ApiProperty({ example: 'admin123' })
    @IsString()
    @Length(8)
    current_password: string;

    @ApiPropertyOptional({ example: 'admin123' })
    @IsOptional()
    @IsString()
    @Length(8)
    new_password?: string;
}
