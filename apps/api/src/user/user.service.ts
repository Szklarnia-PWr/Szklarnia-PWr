import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@szklarnia-pwr/database';
import { UpdateUserDto } from '@szklarnia-pwr/dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private users: Repository<User>) {}

    async getByID(id: string) {
        const user = await this.users.findOne({ where: { id } });

        if (!user) throw new NotFoundException();

        return user;
    }

    async getByUsername(username: string) {
        const user = await this.users.findOne({ where: { username } });

        if (!user) throw new NotFoundException();

        return user;
    }

    getAll() {
        return this.users.find();
    }

    updateUser(user: User, dto: UpdateUserDto) {
        if (user.verifyPassword(dto.current_password)) {
            if (dto.new_password) {
                user.setPassword(dto.new_password);
            }
            return this.users.save(user);
        } else throw new UnauthorizedException();
    }
}
