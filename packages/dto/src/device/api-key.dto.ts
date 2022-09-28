import { ApiProperty } from '@nestjs/swagger';
import { randomBytes } from 'crypto';

export class ApiKeyDto {
    @ApiProperty({ example: randomBytes(32).toString('base64url') })
    key: string;
}
