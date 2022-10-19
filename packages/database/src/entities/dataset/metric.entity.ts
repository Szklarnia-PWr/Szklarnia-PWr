import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { Device } from '../device';

@Entity('metrics')
export class Metric {
    @PrimaryGeneratedColumn('increment')
    @Exclude()
    id: number;

    @ApiProperty({ example: 'esp32_c13' })
    @ManyToOne(() => Device)
    @JoinColumn()
    @Exclude()
    device: Device;

    @Column()
    @Exclude()
    dataset: string;

    @ApiProperty({ example: new Date() })
    @CreateDateColumn({ type: 'timestamptz', primary: true })
    timestamp: Date;

    @ApiProperty({ example: '36.6' })
    @Column('numeric')
    value: number;
}
