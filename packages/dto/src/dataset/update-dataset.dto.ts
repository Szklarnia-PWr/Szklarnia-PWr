import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateDatasetDto {
    @ApiPropertyOptional({ example: 'Temperature' })
    @IsOptional()
    @IsString()
    @Length(1, 128)
    title?: string;
}
