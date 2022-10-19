import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiSecurity, ApiTags } from '@nestjs/swagger';

import { Device } from '@szklarnia-pwr/database';
import { ApiKeyDto } from '@szklarnia-pwr/dto';
import { APIKeyGuard } from '../auth/guards';
import { DeviceService } from '.';

@Controller('device')
@ApiTags('device')
export class DeviceController {
    constructor(private deviceService: DeviceService) {}

    @Get()
    @ApiOkResponse({ type: Device, isArray: true })
    listDevices() {
        return this.deviceService.getAll();
    }

    @Post(':device/regenerate')
    @ApiParam({ name: 'device', example: 'esp32_c13' })
    @ApiOkResponse({ type: ApiKeyDto })
    @ApiSecurity('X-API-Key')
    @UseGuards(APIKeyGuard)
    async regenerateDeviceApiKey(@Param('device') id: string) {
        const device = await this.deviceService.getByID(id);

        return this.deviceService.regenerateDeviceApiKey(device);
    }
}
