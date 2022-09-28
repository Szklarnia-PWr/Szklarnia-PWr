import {
    Body,
    Controller,
    Get,
    Param,
    ParseUUIDPipe,
    Patch,
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

import { UpdateUserDto } from '@szklarnia-pwr/dto';
import { UserService } from '.';

@Controller('user')
@ApiTags('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async listUsers() {
        return this.userService.getAll();
    }

    @Patch(':id')
    @ApiParam({ name: 'id', example: randomUUID() })
    async updateUser(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: UpdateUserDto,
    ) {
        const user = await this.userService.getByID(id);

        return this.userService.updateUser(user, dto);
    }
}
