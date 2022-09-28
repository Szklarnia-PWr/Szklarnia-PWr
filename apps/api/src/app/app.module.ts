import { Module } from '@nestjs/common';

import { ConfigModule } from '../config';
import { DatabaseModule } from '../database';
import { UserModule } from '../user';
import { AppController, AppService } from '.';

@Module({
    imports: [ConfigModule, DatabaseModule, UserModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
