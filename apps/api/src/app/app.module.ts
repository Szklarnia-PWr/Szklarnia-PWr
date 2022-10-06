import { MiddlewareConsumer, Module } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';

import { AuthModule } from '../auth';
import { ConfigModule, ConfigService, NodeEnv } from '../config';
import { DataModule } from '../data';
import { DatabaseModule } from '../database';
import { DatasetModule } from '../dataset';
import { DeviceModule } from '../device';
import { RedisModule } from '../redis';
import { UserModule } from '../user';
import { Time } from '../utils';
import { AppController, AppService } from '.';

@Module({
    imports: [
        ConfigModule,
        RedisModule,
        DatabaseModule,
        UserModule,
        DeviceModule,
        AuthModule,
        DatasetModule,
        DataModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private config: ConfigService) {}

    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                session({
                    secret: this.config.COOKIE_SECRET,
                    resave: false,
                    saveUninitialized: false,
                    cookie: {
                        maxAge: 1 * Time.HOUR,
                        httpOnly: true,
                        secure: this.config.NODE_ENV === NodeEnv.PRODUCTION,
                        sameSite: false,
                    },
                }),
                passport.initialize(),
                passport.session(),
            )
            .forRoutes('*');
    }
}
