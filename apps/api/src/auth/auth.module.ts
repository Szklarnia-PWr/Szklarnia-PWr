import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { DeviceModule } from '../device';
import { UserModule } from '../user';
import {
    APIKeyStrategy,
    AuthController,
    AuthSerializer,
    AuthService,
    LocalStrategy,
} from '.';

@Module({
    imports: [PassportModule, UserModule, DeviceModule],
    providers: [AuthService, APIKeyStrategy, LocalStrategy, AuthSerializer],
    controllers: [AuthController],
})
export class AuthModule {}
