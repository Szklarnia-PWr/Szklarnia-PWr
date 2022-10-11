import { Inject, MiddlewareConsumer, Module } from '@nestjs/common';
import * as ConnectRedis from 'connect-redis';
import * as session from 'express-session';
import Redis from 'ioredis';
import * as passport from 'passport';

import { AuthModule } from '../auth';
import { ConfigModule, ConfigService, NodeEnv } from '../config';
import { DataModule } from '../data';
import { DatabaseModule } from '../database';
import { DatasetModule } from '../dataset';
import { DeviceModule } from '../device';
import { REDIS, RedisModule } from '../redis';
import { UserModule } from '../user';
import { Time } from '../utils';
import { AppController, AppService } from '.';

const RedisStore = ConnectRedis(session);

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
    constructor(
        @Inject(REDIS) private redis_client: Redis,
        private config: ConfigService,
    ) {}

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
                    store: new RedisStore({ client: this.redis_client }),
                }),
                passport.initialize(),
                passport.session(),
            )
            .forRoutes('*');
    }
}
