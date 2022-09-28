import { Request as ExpressRequest } from 'express';

import { Device, User } from '@szklarnia-pwr/database';

export interface Request extends ExpressRequest {
    user: User;
}

export interface DeviceRequest extends ExpressRequest {
    user: Device;
}
