import { Controller, Get, Param, Post, Body, Delete, Patch, Query } from '@nestjs/common';
import { VerduraService } from './verdura.service';
import { VerduraDto } from './verdura.dto';
import { VerduraGateway } from './verdura.gateway';

@Controller('verdura')
export class VerduraController {

  constructor(
    private verduras: VerduraService,
    private gateway: VerduraGateway,
  ) {}

  @Get()
  findAll() {
    return this.verduras.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
  ) {
    return this.verduras.findOne(id);
  }

  @Post('query')
  find(
    @Body() query: any,
  ) {
    return this.verduras.find(query);
  }

  @Post()
  async create(
    @Body() body: VerduraDto,
    @Query('key') realtimeKey?: string,
  ) {

    const verdura = await this.verduras.create(body);

    this.gateway.server.emit('verdura', {
      collection: 'verdura',
      type: 'CREATE',
      payload: verdura,
     });

    if (realtimeKey) {
       this.gateway.server.emit(realtimeKey, {
         collection: 'verdura',
         type: 'CREATE',
         payload: verdura,
         key: realtimeKey,
       });
     }

    return verdura;

  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
    @Query('key') realtimeKey?: string,
  ) {

    this.gateway.server.emit('verdura', {
      collection: 'verdura',
      type: 'DELETE',
      payload: { id },
    });

    if (realtimeKey) {
      this.gateway.server.emit(realtimeKey, {
        collection: 'verdura',
        type: 'DELETE',
        payload: { id },
        key: realtimeKey,
      });
    }

    return this.verduras.delete(id);

  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: VerduraDto,
    @Query('key') realtimeKey?: string,
  ) {

    this.gateway.server.emit('verdura', {
      collection: 'verdura',
      type: 'UPDATE',
      payload: { id, body },
    });

    if (realtimeKey) {
      this.gateway.server.emit(realtimeKey, {
        collection: 'verdura',
        type: 'UPDATE',
        payload: { id, body },
        key: realtimeKey,
      });
    }

    return this.verduras.update(id, body);

  }

}

