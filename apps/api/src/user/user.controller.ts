import {
    Body,
    Controller,
    Get,
    Param,
    ParseUUIDPipe,
    Patch,
    UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

import { User } from '@szklarnia-pwr/database';
import { UpdateUserDto } from '@szklarnia-pwr/dto';
import { CookieGuard } from '../auth/guards';
import { UserService } from '.';

@Controller('user')
@ApiTags('user')
@UseGuards(CookieGuard)
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    @ApiOkResponse({ type: User, isArray: true })
    async listUsers() {
        return this.userService.getAll();
    }

    @Patch(':id')
    @ApiParam({ name: 'id', example: randomUUID() })
    @ApiOkResponse({ type: User })
    async updateUser(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: UpdateUserDto,
    ) {
        const user = await this.userService.getByID(id);

        return this.userService.updateUser(user, dto);
    }
}
