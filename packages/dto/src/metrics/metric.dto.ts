import { ApiProperty } from '@nestjs/swagger';

export class MetricDto {
    @ApiProperty({ description: 'timestamp', example: new Date().getTime() })
    t: number;

    @ApiProperty({ description: 'value', example: 36.6 })
    v: number;
}
