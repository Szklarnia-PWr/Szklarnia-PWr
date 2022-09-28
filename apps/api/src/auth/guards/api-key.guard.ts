import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class APIKeyGuard extends AuthGuard('api-key') {}
