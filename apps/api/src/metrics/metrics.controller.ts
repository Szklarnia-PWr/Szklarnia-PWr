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

import { Device } from '@szklarnia-pwr/database';
import { GetMetricsDto, MetricDto } from '@szklarnia-pwr/dto';
import { APIKeyGuard, ReqUser } from '../auth';
import { MetricsService } from '.';

@Controller('metrics')
@ApiTags('metrics')
export class MetricsController {
    constructor(private dataService: MetricsService) {}

    @Get(':device/:dataset')
    @ApiParam({ name: 'device', example: 'esp32_c13' })
    @ApiParam({ name: 'dataset', example: 'temperature' })
    @ApiOkResponse({ type: MetricDto, isArray: true })
    getMetrics(
        @Param('device') device: string,
        @Param('dataset') dataset: string,
        @Query() query: GetMetricsDto,
    ) {
        return this.dataService.getMetrics(device, dataset, query);
    }

    @Post()
    @ApiBody({
        schema: { example: { temperature: 24.5, humidity: 75 } },
    })
    @ApiCreatedResponse()
    @ApiSecurity('X-API-Key')
    @UseGuards(APIKeyGuard)
    postMetrics(
        @ReqUser() device: Device,
        @Body() dto: { [key: string]: number },
    ) {
        return this.dataService.postMetrics(device, dto);
    }
}
