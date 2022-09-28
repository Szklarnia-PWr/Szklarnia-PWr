import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Query,
    UseGuards,
} from '@nestjs/common';
import {
    ApiBody,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiParam,
    ApiSecurity,
    ApiTags,
} from '@nestjs/swagger';

import { DatasetEntry, Device } from '@szklarnia-pwr/database';
import { GetMetricsDto } from '@szklarnia-pwr/dto';
import { APIKeyGuard, ReqUser } from '../auth';
import { DataService } from '.';

@Controller('data')
@ApiTags('data')
export class DataController {
    constructor(private dataService: DataService) {}

    @Get(':id')
    @ApiParam({ name: 'id', example: 'temperature' })
    @ApiOkResponse({ type: DatasetEntry, isArray: true })
    getMetrics(@Param('id') id: string, @Query() query: GetMetricsDto) {
        return this.dataService.getMetrics(id, query);
    }

    @Post()
    @ApiBody({
        schema: { example: { temperature: 24.5, humidity: 75 } },
    })
    @ApiCreatedResponse()
    @ApiSecurity('X-API-Key')
    @UseGuards(APIKeyGuard)
    addEntry(
        @ReqUser() device: Device,
        @Body() dto: { [key: string]: number },
    ) {
        return this.dataService.addEntry(device, dto);
    }
}
