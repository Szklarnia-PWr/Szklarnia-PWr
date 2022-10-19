import { Request as ExpressRequest } from 'express';

import { Device } from '@szklarnia-pwr/database';

export interface Request extends ExpressRequest {
    user: Device;
}
