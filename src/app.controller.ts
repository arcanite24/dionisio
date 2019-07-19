import { version } from '../package.json';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  constructor() {}

  @Get('hello')
  hello() {
    return {
      version,
      message: 'ฅ^•ﻌ•^ฅ',
    };
  }

}
