import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

import { User } from '@szklarnia-pwr/database';
import { UserService } from '../../user';

@Injectable()
export class AuthSerializer extends PassportSerializer {
    constructor(private userService: UserService) {
        super();
    }

    serializeUser(user: User, done: CallableFunction) {
        done(null, user.id);
    }

    async deserializeUser(id: string, done: CallableFunction) {
        const user = await this.userService.getByID(id);
        done(null, user);
    }
}
