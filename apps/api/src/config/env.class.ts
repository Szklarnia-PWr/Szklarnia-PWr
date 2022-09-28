import {
    IsBooleanString,
    IsEnum,
    IsNumber,
    IsString,
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

    @IsNumber()
    PORT: number;

    @IsString()
    BASE_PATH = '/';

    // CORS

    @IsString()
    CLIENT_URL: string;

    @IsString()
    CLIENT_CORS_WILDCARD_URL: string;

    // SESSION

    @IsString()
    @MinLength(32)
    COOKIE_SECRET: string;

    // DATABASE

    @IsString()
    DATABASE_URL: string;

    @IsBooleanString()
    DATABASE_SSL: string;
}
