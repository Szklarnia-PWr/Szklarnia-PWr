import { Injectable, UnauthorizedException } from '@nestjs/common';

import { DeviceService } from '../device';
import { UserService } from '../user';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private deviceService: DeviceService,
    ) {}

    async login(username: string, password: string) {
        try {
            const user = await this.userService.getByUsername(username);

            if (!user.verifyPassword(password)) {
                throw new UnauthorizedException();
            }

            return user;
        } catch {
            throw new UnauthorizedException();
        }
    }

    async loginApiKey(apiKey: string) {
        try {
            return await this.deviceService.getByApiKey(apiKey);
        } catch {
            throw new UnauthorizedException();
        }
    }
}
