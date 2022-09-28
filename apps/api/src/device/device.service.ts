import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createHash } from 'crypto';
import { Repository } from 'typeorm';

import { Device } from '@szklarnia-pwr/database';
import {
    ApiKeyDto,
    CreateDeviceDto,
    UpdateDeviceDto,
} from '@szklarnia-pwr/dto';

@Injectable()
export class DeviceService {
    constructor(
        @InjectRepository(Device) private devices: Repository<Device>,
    ) {}

    async getByID(id: string) {
        const device = await this.devices.findOne({ where: { id } });

        if (!device) throw new NotFoundException();

        return device;
    }

    async getByName(name: string) {
        const device = await this.devices.findOne({ where: { name } });

        if (!device) throw new NotFoundException();

        return device;
    }

    async getByApiKey(apiKey: string) {
        const hash = createHash('sha256').update(apiKey).digest('base64');

        const device = await this.devices.findOne({
            where: { apiKeyHash: hash },
        });

        if (!device) throw new NotFoundException();

        return device;
    }

    getAll() {
        return this.devices.find();
    }

    async createDevice(dto: CreateDeviceDto) {
        if (await this.devices.count({ where: { name: dto.name } })) {
            throw new ConflictException();
        }

        const device = this.devices.create(dto);
        return this.devices.save(device);
    }

    async updateDevice(device: Device, dto: UpdateDeviceDto) {
        if (dto.description) device.description = dto.description;
        if (dto.name && dto.name !== device.name) {
            if (await this.devices.count({ where: { name: dto.name } })) {
                throw new ConflictException();
            }
            device.name = dto.name;
        }
        return this.devices.save(device);
    }

    async regenerateDeviceApiKey(device: Device): Promise<ApiKeyDto> {
        const key = device.generateRandomApiKey();
        await this.devices.save(device);
        return { key };
    }

    deleteDevice(device: Device) {
        return this.devices.remove(device);
    }
}
