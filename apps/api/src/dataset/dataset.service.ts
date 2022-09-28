import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Dataset } from '@szklarnia-pwr/database';
import { CreateDatasetDto, UpdateDatasetDto } from '@szklarnia-pwr/dto';

@Injectable()
export class DatasetService {
    constructor(
        @InjectRepository(Dataset) private datasets: Repository<Dataset>,
    ) {}

    async getByID(id: string) {
        const dataset = await this.datasets.findOne({ where: { id } });

        if (!dataset) throw new NotFoundException();

        return dataset;
    }

    getAll() {
        return this.datasets.find();
    }

    async createDataset(dto: CreateDatasetDto) {
        if (await this.datasets.count({ where: { id: dto.id } })) {
            throw new ConflictException();
        }

        const dataset = this.datasets.create(dto);
        return this.datasets.save(dataset);
    }

    async updateDataset(dataset: Dataset, dto: UpdateDatasetDto) {
        if (dto.title) dataset.title = dto.title;
        return this.datasets.save(dataset);
    }
}
