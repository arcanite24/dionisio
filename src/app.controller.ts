import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  hello() {
    return {
      version: '0.0.1',
      message: 'ฅ^•ﻌ•^ฅ',
    };
  }

}
