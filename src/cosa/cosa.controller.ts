
import { Controller, Get, Param, Post, Body, Delete, Patch } from '@nestjs/common';
import { CosaService } from './cosa.service';
import { CosaDto } from './cosa.dto';

@Controller('cosa')
export class CosaController {

  constructor(
    private cosas: CosaService,
  ) {}

  @Get()
  findAll() {
    return this.cosas.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
  ) {
    return this.cosas.findOne(id);
  }

  @Post('query')
  find(
    @Body() query: any,
  ) {
    return this.cosas.find(query);
  }

  @Post()
  create(
    @Body() body: CosaDto,
  ) {
    return this.cosas.create(body);
  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
  ) {
    return this.cosas.delete(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: CosaDto,
  ) {
    return this.cosas.update(id, body);
  }

}

