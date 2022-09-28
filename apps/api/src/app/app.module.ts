import { MiddlewareConsumer, Module } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';

import { AuthModule } from '../auth';
import { ConfigModule, ConfigService, NodeEnv } from '../config';
import { DatabaseModule } from '../database';
import { DeviceModule } from '../device';
import { UserModule } from '../user';
import { Time } from '../utils';
import { AppController, AppService } from '.';

@Module({
    imports: [
        ConfigModule,
        DatabaseModule,
        UserModule,
        DeviceModule,
        AuthModule,
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
                        secure: 'auto',
                        sameSite:
                            this.config.NODE_ENV === NodeEnv.DEVELOPMENT
                                ? undefined
                                : 'none',
                    },
                }),
                passport.initialize(),
                passport.session(),
            )
            .forRoutes('*');
    }
}
