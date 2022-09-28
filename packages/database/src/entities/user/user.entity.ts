import { ApiProperty } from '@nestjs/swagger';
import { compareSync, hashSync } from 'bcryptjs';
import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @ApiProperty({ example: randomUUID() })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ example: 'maciej.opalinski' })
    @Column()
    username: string;

    @ApiProperty({
        example: hashSync('admin123'),
        description: 'Bcrypt hashed password',
    })
    @Column()
    @Exclude()
    passwordHash: string;

    verifyPassword(password: string) {
        return compareSync(password, this.passwordHash);
    }

    setPassword(password: string) {
        this.passwordHash = hashSync(password);
    }
}
