import { MiddlewareConsumer, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import * as passport from 'passport';

import { AuthModule } from '../auth';
import { ConfigModule, ConfigService } from '../config';
import { DatabaseModule } from '../database';
import { DeviceModule } from '../device';
import { MetricsModule } from '../metrics';
import { RedisModule } from '../redis';

@Module({
    imports: [
        ConfigModule,
        RedisModule,
        DatabaseModule,
        ThrottlerModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => config.throttlerOptions(),
        }),
        DeviceModule,
        AuthModule,
        MetricsModule,
    ],
    controllers: [],
    providers: [
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard,
        },
    ],
})
export class AppModule {
    constructor() {}

    configure(consumer: MiddlewareConsumer) {
        consumer.apply(passport.initialize()).forRoutes('*');
    }
}
