import { ApiProperty } from '@nestjs/swagger';
import { IsDateString } from 'class-validator';

export class GetMetricsDto {
    // @ApiPropertyOptional({
    //     example: ['esp32_c13', 'esp32_backup', 'esp32_test'],
    // })
    // @IsOptional()
    // @ArrayMaxSize(30)
    // @IsString({ each: true })
    // sources?: string[];

    @ApiProperty({ example: new Date(2022, 9, 27) })
    @IsDateString()
    since: Date;
}
