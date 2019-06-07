---
to: src/<%= h.inflection.camelize(collection, true) %>/<%= h.inflection.camelize(collection, true) %>.controller.ts
---
<%
    lowCamel = h.inflection.camelize(collection, true)
    camel = h.inflection.camelize(collection)
    plural = h.inflection.pluralize(lowCamel)
%>
import { Controller, Get, Param, Post, Body, Delete, Patch } from '@nestjs/common';
import { <%= camel %>Service } from './<%= lowCamel %>.service';
import { <%= camel %>Dto } from './<%= lowCamel %>.dto';

@Controller('<%= lowCamel %>')
export class <%= camel %>Controller {

  constructor(
    private <%= plural %>: <%= camel %>Service,
  ) {}

  @Get()
  findAll() {
    return this.<%= plural %>.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
  ) {
    return this.<%= plural %>.findOne(id);
  }

  @Post('query')
  find(
    @Body() query: any,
  ) {
    return this.<%= plural %>.find(query);
  }

  @Post()
  create(
    @Body() body: <%= camel %>Dto,
  ) {
    return this.<%= plural %>.create(body);
  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
  ) {
    return this.<%= plural %>.delete(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: <%= camel %>Dto,
  ) {
    return this.<%= plural %>.update(id, body);
  }

}

