import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Dataset } from '@szklarnia-pwr/database';
import { DatasetController, DatasetService } from '.';

@Module({
    imports: [TypeOrmModule.forFeature([Dataset])],
    providers: [DatasetService],
    controllers: [DatasetController],
    exports: [DatasetService],
})
export class DatasetModule {}
