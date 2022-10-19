import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { createHash, randomBytes } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('devices')
export class Device {
    @ApiProperty({ example: 'esp32_c13' })
    @PrimaryColumn()
    id: string;

    @Column({ nullable: true, default: null, unique: true })
    @Exclude()
    apiKeyHash?: string;

    verifyKey(apiKey: string) {
        const hash = createHash('sha256').update(apiKey).digest('base64');
        return this.apiKeyHash === hash;
    }

    generateRandomApiKey() {
        const apiKey = randomBytes(32).toString('base64');
        this.apiKeyHash = createHash('sha256').update(apiKey).digest('base64');
        return apiKey;
    }
}
