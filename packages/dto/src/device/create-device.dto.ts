import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

export class CreateDeviceDto {
    @ApiProperty({ example: 'esp32_c13' })
    @IsString()
    @Length(3, 64)
    name: string;

    @ApiPropertyOptional({ example: 'ESP-32 Development Board' })
    @IsOptional()
    @IsString()
    @Length(1, 512)
    description?: string;
}
