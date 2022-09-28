import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

import { CreateDeviceDto, UpdateDeviceDto } from '@szklarnia-pwr/dto';
import { DeviceService } from '.';

@Controller('device')
@ApiTags('device')
export class DeviceController {
    constructor(private deviceService: DeviceService) {}

    @Get()
    listDevices() {
        return this.deviceService.getAll();
    }

    @Post()
    createDevice(@Body() dto: CreateDeviceDto) {
        return this.deviceService.createDevice(dto);
    }

    @Patch(':id')
    @ApiParam({ name: 'id', example: randomUUID() })
    async updateDevice(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: UpdateDeviceDto,
    ) {
        const device = await this.deviceService.getByID(id);

        return this.deviceService.updateDevice(device, dto);
    }

    @Post(':id/regenerate')
    @ApiParam({ name: 'id', example: randomUUID() })
    async regenerateDeviceApiKey(@Param('id', ParseUUIDPipe) id: string) {
        const device = await this.deviceService.getByID(id);

        return this.deviceService.regenerateDeviceApiKey(device);
    }

    @Delete(':id')
    @ApiParam({ name: 'id', example: randomUUID() })
    async deleteDevice(@Param('id', ParseUUIDPipe) id: string) {
        const device = await this.deviceService.getByID(id);

        await this.deviceService.deleteDevice(device);
    }
}
