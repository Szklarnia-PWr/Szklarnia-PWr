import { Type } from 'class-transformer';
import {
    IsBooleanString,
    IsEnum,
    IsNumber,
    IsString,
    Max,
    Min,
    MinLength,
} from 'class-validator';

export enum NodeEnv {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
    TEST = 'test',
}

export class Env {
    @IsEnum(NodeEnv)
    NODE_ENV: NodeEnv;

    // APP

    @Type(() => Number)
    @IsNumber()
    PORT = 4000;

    @IsString()
    BASE_PATH = '/';

    // CORS

    @IsString()
    CLIENT_URL: string;

    @IsString()
    CLIENT_CORS_WILDCARD_URL: string;

    // THROTTLER

    @IsNumber()
    @Min(1)
    @Max(900)
    THROTTLER_TTL: number;

    @IsNumber()
    @Min(1)
    THROTTLER_LIMIT: number;

    // SESSION

    @IsString()
    @MinLength(32)
    COOKIE_SECRET: string;

    // REDIS

    @IsString()
    REDIS_URL: string;

    // DATABASE

    @IsString()
    DATABASE_URL: string;

    @IsBooleanString()
    DATABASE_SSL: string;
}
