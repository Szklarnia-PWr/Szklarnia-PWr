import {
    Controller,
    Get,
    HttpCode,
    InternalServerErrorException,
    Post,
    Req,
    UseGuards,
} from '@nestjs/common';
import {
    ApiBody,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiSecurity,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { Device, User } from '@szklarnia-pwr/database';
import { LoginDto } from '@szklarnia-pwr/dto';
import {
    APIKeyGuard,
    CookieGuard,
    DeviceRequest,
    LoginGuard,
    Request,
    ReqUser,
} from '.';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    @Get('@me')
    @UseGuards(CookieGuard)
    @ApiOkResponse({ type: User })
    me(@ReqUser() user: User) {
        return user;
    }

    @Get('@device')
    @ApiSecurity('X-API-Key')
    @UseGuards(APIKeyGuard)
    @ApiOkResponse({ type: Device })
    apikey(@Req() req: DeviceRequest) {
        return req.user;
    }

    @Post('login')
    @UseGuards(LoginGuard)
    @ApiBody({ type: LoginDto })
    @ApiCreatedResponse({ description: 'Successfully logged in', type: User })
    @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
    login(@ReqUser() user: User) {
        return user;
    }

    @Post('logout')
    @HttpCode(200)
    @ApiOkResponse({ description: 'Successfully logged out' })
    logout(@Req() request: Request) {
        request.logout((err) => {
            if (err) throw new InternalServerErrorException();
        });
    }
}
