import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';

import { Device, Metric } from '@szklarnia-pwr/database';
import { GetMetricsDto, MetricDto } from '@szklarnia-pwr/dto';

@Injectable()
export class MetricsService {
    constructor(
        @InjectRepository(Metric)
        private metrics: Repository<Metric>,
    ) {}

    async getMetrics(device_id: string, dataset: string, query: GetMetricsDto) {
        return (
            await this.metrics.find({
                where: {
                    device: { id: device_id },
                    dataset,
                    timestamp: MoreThanOrEqual(query.since),
                },
                select: {
                    timestamp: true,
                    value: true,
                },
                order: {
                    timestamp: 'ASC',
                },
            })
        ).map((m) => {
            const metric = new MetricDto();
            metric.t = m.timestamp.getTime();
            metric.v = m.value;
            return metric;
        });
    }

    async postMetrics(device: Device, dto: { [key: string]: number }) {
        const data = Object.entries(dto).map(([dataset, value]) => {
            const metric = new Metric();
            metric.device = device;
            metric.dataset = dataset;
            metric.value = value;

            return metric;
        });

        await this.metrics.save(data);
    }
}
