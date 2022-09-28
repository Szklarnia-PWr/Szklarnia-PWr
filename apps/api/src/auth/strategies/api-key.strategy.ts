import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';

import { AuthService, Request } from '..';

@Injectable()
export class APIKeyStrategy extends PassportStrategy(Strategy, 'api-key') {
    constructor(private authService: AuthService) {
        super();
    }

    validate(req: Request) {
        const apiKey = req.get('X-API-Key');

        if (!apiKey) {
            throw new UnauthorizedException();
        }

        return this.authService.loginApiKey(apiKey);
    }
}
