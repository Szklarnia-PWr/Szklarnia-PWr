import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';

import { DatasetEntry, Device } from '@szklarnia-pwr/database';
import { GetMetricsDto } from '@szklarnia-pwr/dto';

@Injectable()
export class DataService {
    constructor(
        @InjectRepository(DatasetEntry)
        private entries: Repository<DatasetEntry>,
    ) {}

    getMetrics(id: string, query: GetMetricsDto) {
        return this.entries.find({
            where: {
                dataset: { id },
                timestamp: MoreThanOrEqual(query.since),
            },
        });
    }

    async addEntry(device: Device, dto: { [key: string]: number }) {
        await Promise.all(
            Object.entries(dto).map(async ([id, value]) => {
                return this.entries.insert({ dataset: { id }, value, device });
            }),
        );
    }
}
