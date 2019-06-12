
import { Controller, Get, Param, Post, Body, Delete, Patch } from '@nestjs/common';
import { HeroService } from './hero.service';
import { HeroDto } from './hero.dto';

@Controller('hero')
export class HeroController {

  constructor(
    private heros: HeroService,
  ) {}

  @Get()
  findAll() {
    return this.heros.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
  ) {
    return this.heros.findOne(id);
  }

  @Post('query')
  find(
    @Body() query: any,
  ) {
    return this.heros.find(query);
  }

  @Post()
  create(
    @Body() body: HeroDto,
  ) {
    return this.heros.create(body);
  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
  ) {
    return this.heros.delete(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: HeroDto,
  ) {
    return this.heros.update(id, body);
  }

}

