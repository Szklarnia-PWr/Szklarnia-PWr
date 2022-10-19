import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';

import { Device } from '@szklarnia-pwr/database';
import { APIKeyGuard, Request } from '.';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    @Get('@me')
    @ApiSecurity('X-API-Key')
    @UseGuards(APIKeyGuard)
    @ApiOkResponse({ type: Device })
    me(@Req() req: Request) {
        return req.user;
    }
}
