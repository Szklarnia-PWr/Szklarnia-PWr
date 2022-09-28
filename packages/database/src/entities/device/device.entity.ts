import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { createHash, randomBytes, randomUUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('devices')
export class Device {
    @ApiProperty({ example: randomUUID() })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ example: 'esp32_c13' })
    @Column({ unique: true })
    name: string;

    @ApiProperty({ example: 'ESP-32 Development Board' })
    @Column('text', { default: '' })
    description: string;

    @Column({ nullable: true, default: null, unique: true })
    @Exclude()
    apiKeyHash?: string;

    verifyKey(apiKey: string) {
        const hash = createHash('sha256').update(apiKey).digest('base64');
        return this.apiKeyHash === hash;
    }

    generateRandomApiKey() {
        const apiKey = randomBytes(32).toString('base64url');
        this.apiKeyHash = createHash('sha256').update(apiKey).digest('base64');
        return apiKey;
    }
}
