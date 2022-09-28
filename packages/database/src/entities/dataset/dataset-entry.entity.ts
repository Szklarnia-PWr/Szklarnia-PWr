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
import { Dataset } from '.';

@Entity('entries')
export class DatasetEntry {
    @PrimaryGeneratedColumn('increment')
    @Exclude()
    id: number;

    @ManyToOne(() => Device)
    @JoinColumn()
    device: Device;

    @ManyToOne(() => Dataset, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn()
    @Exclude()
    dataset: Dataset;

    @ApiProperty({ example: '36.6' })
    @Column('numeric')
    value: number;

    @ApiProperty({ example: new Date() })
    @CreateDateColumn({ type: 'timestamptz' })
    timestamp: Date;
}
