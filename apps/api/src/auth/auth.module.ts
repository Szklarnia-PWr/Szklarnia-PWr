import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { DeviceModule } from '../device';
import { APIKeyStrategy, AuthController, AuthService } from '.';

@Module({
    imports: [PassportModule, DeviceModule],
    providers: [AuthService, APIKeyStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
