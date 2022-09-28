import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Device } from '@szklarnia-pwr/database';
import { CreateDeviceDto, UpdateDeviceDto } from '@szklarnia-pwr/dto';

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

    getAll() {
        return this.devices.find();
    }

    createDevice(dto: CreateDeviceDto) {
        return this.devices.save(dto);
    }

    async updateDevice(device: Device, dto: UpdateDeviceDto) {
        if (dto.description) device.description = dto.description;
        if (dto.name) {
            if (await this.devices.count({ where: { name: dto.name } })) {
                throw new BadRequestException();
            }
            device.name = dto.name;
        }
        return this.devices.save(device);
    }

    deleteDevice(device: Device) {
        return this.devices.remove(device);
    }
}
