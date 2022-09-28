import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Device } from '@szklarnia-pwr/database';
import { DeviceController, DeviceService } from '.';

@Module({
    imports: [TypeOrmModule.forFeature([Device])],
    providers: [DeviceService],
    controllers: [DeviceController],
    exports: [DeviceService],
})
export class DeviceModule {}
