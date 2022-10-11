import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { ThrottlerModuleOptions } from '@nestjs/throttler';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { RedisOptions } from 'ioredis';

import { Env, NodeEnv } from '.';

@Injectable()
export class ConfigService {
    constructor(private env: NestConfigService<Env, true>) {}

    get<T = any>(key: keyof Env) {
        return this.env.get<T>(key);
    }

    get NODE_ENV() {
        return this.env.get<NodeEnv>('NODE_ENV');
    }

    get PORT() {
        return this.env.get<number>('PORT');
    }

    get BASE_PATH() {
        return this.env.get<string>('BASE_PATH');
    }

    get CLIENT_URL() {
        return this.env.get<string>('CLIENT_URL');
    }

    get CLIENT_CORS_WILDCARD_URL() {
        return this.env.get<string>('CLIENT_CORS_WILDCARD_URL');
    }

    get COOKIE_SECRET() {
        return this.env.get<string>('COOKIE_SECRET');
    }

    get REDIS_URL() {
        return this.env.get<string>('REDIS_URL');
    }

    redisOptions(): RedisOptions {
        return {
            tls: this.REDIS_URL.startsWith('rediss://')
                ? { requestCert: true, rejectUnauthorized: false }
                : undefined,
        };
    }

    databaseCredentials(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            url: this.get<string>('DATABASE_URL'),
            ssl:
                this.get<string>('DATABASE_SSL') === 'true'
                    ? { requestCert: true, rejectUnauthorized: false }
                    : undefined,
        };
    }

    throttlerOptions(): ThrottlerModuleOptions {
        return {
            ttl: this.get<number>('THROTTLER_TTL'),
            limit: this.get<number>('THROTTLER_LIMIT'),
        };
    }
}
