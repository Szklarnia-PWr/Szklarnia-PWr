import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    sayHello() {
        return 'Hello World!';
    }
}
