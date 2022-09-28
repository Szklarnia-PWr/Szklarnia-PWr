import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateDatasetDto {
    @ApiProperty({ example: 'temperature' })
    @IsString()
    @Length(1, 32)
    id: string;

    @ApiProperty({ example: 'Temperature' })
    @IsString()
    @Length(1, 128)
    title: string;
}
