import { ApiProperty } from '@nestjs/swagger';
import { compareSync, encodeBase64, hashSync } from 'bcryptjs';
import { randomBytes, randomUUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

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

    @ApiProperty({ example: hashSync(randomUUID()), description: 'Bcrypt hashed API key' })
    @Column({ nullable: true, default: null })
    @Exclude()
    apiKeyHash?: string;

    measurements: any[]; // TODO: API Measurement Module (#33)

    verifyKey(apiKey: string) {
        return compareSync(apiKey, this.apiKeyHash);
    }

    generateRandomApiKey() {
        const apiKey = randomBytes(32).toString('base64url');
        this.apiKeyHash = hashSync(apiKey);
        return apiKey;
    }
}
