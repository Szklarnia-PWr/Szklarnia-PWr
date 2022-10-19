import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Metric } from '@szklarnia-pwr/database';
import { MetricsController, MetricsService } from '.';

@Module({
    imports: [TypeOrmModule.forFeature([Metric])],
    providers: [MetricsService],
    controllers: [MetricsController],
    exports: [MetricsService],
})
export class MetricsModule {}
