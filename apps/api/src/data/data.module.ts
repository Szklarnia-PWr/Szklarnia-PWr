import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatasetEntry } from '@szklarnia-pwr/database';
import { DatasetModule } from '../dataset';
import { DataController, DataService } from '.';

@Module({
    imports: [TypeOrmModule.forFeature([DatasetEntry]), DatasetModule],
    providers: [DataService],
    controllers: [DataController],
    exports: [DataService],
})
export class DataModule {}
