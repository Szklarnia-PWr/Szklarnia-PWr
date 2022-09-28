import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
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

    measurements: any[]; // TODO: API Measurement Module (#33)

    api_keys: any[]; // TODO: API Key Module (#24)
}
