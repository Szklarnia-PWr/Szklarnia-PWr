import { Injectable, UnauthorizedException } from '@nestjs/common';

import { DeviceService } from '../device';

@Injectable()
export class AuthService {
    constructor(private deviceService: DeviceService) {}

    async login(apiKey: string) {
        try {
            return await this.deviceService.getByApiKey(apiKey);
        } catch {
            throw new UnauthorizedException();
        }
    }
}
