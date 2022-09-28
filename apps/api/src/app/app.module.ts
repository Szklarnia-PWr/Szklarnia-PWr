import { Module } from '@nestjs/common';

import { ConfigModule } from '../config';
import { DatabaseModule } from '../database';
import { DeviceModule } from '../device';
import { UserModule } from '../user';
import { AppController, AppService } from '.';

@Module({
    imports: [ConfigModule, DatabaseModule, UserModule, DeviceModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
