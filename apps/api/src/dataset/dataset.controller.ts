import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
} from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiOkResponse,
    ApiParam,
    ApiTags,
} from '@nestjs/swagger';

import { Dataset } from '@szklarnia-pwr/database';
import { CreateDatasetDto, UpdateDatasetDto } from '@szklarnia-pwr/dto';
import { CookieGuard } from '../auth';
import { DatasetService } from '.';

@Controller('dataset')
@ApiTags('dataset')
export class DatasetController {
    constructor(private datasetService: DatasetService) {}

    @Get()
    @ApiOkResponse({ type: Dataset, isArray: true })
    listDatasets() {
        return this.datasetService.getAll();
    }

    @Post()
    @UseGuards(CookieGuard)
    @ApiCreatedResponse({ type: Dataset })
    createDataset(@Body() dto: CreateDatasetDto) {
        return this.datasetService.createDataset(dto);
    }

    @Patch(':id')
    @UseGuards(CookieGuard)
    @ApiParam({ name: 'id', example: 'temperature' })
    @ApiOkResponse({ type: Dataset })
    async updateDataset(
        @Param('id') id: string,
        @Body() dto: UpdateDatasetDto,
    ) {
        const dataset = await this.datasetService.getByID(id);

        return this.datasetService.updateDataset(dataset, dto);
    }
}
