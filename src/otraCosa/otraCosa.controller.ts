
import { Controller, Get, Param, Post, Body, Delete, Patch } from '@nestjs/common';
import { OtraCosaService } from './otraCosa.service';
import { OtraCosaDto } from './otraCosa.dto';

@Controller('otraCosa')
export class OtraCosaController {

  constructor(
    private otraCosas: OtraCosaService,
  ) {}

  @Get()
  findAll() {
    return this.otraCosas.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
  ) {
    return this.otraCosas.findOne(id);
  }

  @Post('query')
  find(
    @Body() query: any,
  ) {
    return this.otraCosas.find(query);
  }

  @Post()
  create(
    @Body() body: OtraCosaDto,
  ) {
    return this.otraCosas.create(body);
  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
  ) {
    return this.otraCosas.delete(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: OtraCosaDto,
  ) {
    return this.otraCosas.update(id, body);
  }

}

