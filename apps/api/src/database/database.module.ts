import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Dataset, DatasetEntry, Device, User } from '@szklarnia-pwr/database';
import { ConfigModule, ConfigService, NodeEnv } from '../config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                ...configService.databaseCredentials(),
                // logging: configService.NODE_ENV === NodeEnv.DEVELOPMENT,
                synchronize: configService.NODE_ENV === NodeEnv.DEVELOPMENT,
                entities: [User, Device, Dataset, DatasetEntry],
            }),
        }),
    ],
})
export class DatabaseModule {}
