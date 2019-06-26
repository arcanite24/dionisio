import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  constructor() {}

  @Get('hello')
  hello() {
    return {
      version: '0.0.1',
      message: 'ฅ^•ﻌ•^ฅ',
    };
  }

}
