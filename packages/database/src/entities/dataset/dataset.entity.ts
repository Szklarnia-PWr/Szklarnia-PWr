import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('datasets')
export class Dataset {
    @ApiProperty({ example: 'temperature' })
    @PrimaryColumn()
    id: string;

    @ApiProperty({ example: 'Temperature' })
    @Column()
    title: string;
}
