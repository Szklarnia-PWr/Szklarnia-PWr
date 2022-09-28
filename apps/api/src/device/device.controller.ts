import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
    UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

import { Device } from '@szklarnia-pwr/database';
import {
    ApiKeyDto,
    CreateDeviceDto,
    UpdateDeviceDto,
} from '@szklarnia-pwr/dto';
import { CookieGuard } from '../auth/guards';
import { DeviceService } from '.';

@Controller('device')
@ApiTags('device')
@UseGuards(CookieGuard)
export class DeviceController {
    constructor(private deviceService: DeviceService) {}

    @Get()
    @ApiOkResponse({ type: Device, isArray: true })
    listDevices() {
        return this.deviceService.getAll();
    }

    @Post()
    @ApiOkResponse({ type: Device })
    createDevice(@Body() dto: CreateDeviceDto) {
        return this.deviceService.createDevice(dto);
    }

    @Patch(':id')
    @ApiParam({ name: 'id', example: randomUUID() })
    @ApiOkResponse({ type: Device })
    async updateDevice(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: UpdateDeviceDto,
    ) {
        const device = await this.deviceService.getByID(id);

        return this.deviceService.updateDevice(device, dto);
    }

    @Delete(':id')
    @ApiParam({ name: 'id', example: randomUUID() })
    async deleteDevice(@Param('id', ParseUUIDPipe) id: string) {
        const device = await this.deviceService.getByID(id);

        await this.deviceService.deleteDevice(device);
    }

    @Post(':id/regenerate')
    @ApiParam({ name: 'id', example: randomUUID() })
    @ApiOkResponse({ type: ApiKeyDto })
    async regenerateDeviceApiKey(@Param('id', ParseUUIDPipe) id: string) {
        const device = await this.deviceService.getByID(id);

        return this.deviceService.regenerateDeviceApiKey(device);
    }
}
