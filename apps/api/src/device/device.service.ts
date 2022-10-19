import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createHash } from 'crypto';
import { Repository } from 'typeorm';

import { Device } from '@szklarnia-pwr/database';
import { ApiKeyDto } from '@szklarnia-pwr/dto';

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

    async regenerateDeviceApiKey(device: Device): Promise<ApiKeyDto> {
        const key = device.generateRandomApiKey();
        await this.devices.save(device);
        return { key };
    }
}
