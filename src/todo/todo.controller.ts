
import { Controller, Get, Param, Post, Body, Delete, Patch, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './todo.dto';
import { TodoGateway } from './todo.gateway';

@Controller('todo')
export class TodoController {

  constructor(
    private todos: TodoService,
    private gateway: TodoGateway,
  ) {}

  @Get()
  findAll() {
    return this.todos.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
  ) {
    return this.todos.findOne(id);
  }

  @Post('query')
  find(
    @Body() query: any,
  ) {
    return this.todos.find(query);
  }

  @Post()
  async create(
    @Body() body: TodoDto,
    @Query('key') realtimeKey?: string,
  ) {

    const todo = await this.todos.create(body);

    this.gateway.server.emit('todo', {
      collection: 'todo',
      type: 'CREATE',
      payload: todo,
     });

    if (realtimeKey) {
       this.gateway.server.emit(realtimeKey, {
         collection: 'todo',
         type: 'CREATE',
         payload: todo,
         key: realtimeKey,
       });
     }

    return todo;

  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
    @Query('key') realtimeKey?: string,
  ) {

    this.gateway.server.emit('todo', {
      collection: 'todo',
      type: 'DELETE',
      payload: { id },
    });

    if (realtimeKey) {
      this.gateway.server.emit(realtimeKey, {
        collection: 'todo',
        type: 'DELETE',
        payload: { id },
        key: realtimeKey,
      });
    }

    return this.todos.delete(id);

  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: TodoDto,
    @Query('key') realtimeKey?: string,
  ) {

    this.gateway.server.emit('todo', {
      collection: 'todo',
      type: 'UPDATE',
      payload: { id, body },
    });

    if (realtimeKey) {
      this.gateway.server.emit(realtimeKey, {
        collection: 'todo',
        type: 'UPDATE',
        payload: { id, body },
        key: realtimeKey,
      });
    }

    return this.todos.update(id, body);

  }

  @Patch('modify/:id')
  async modify(
    @Param('id') id: number,
    @Body() body: {field: string, delta: number},
    @Query('key') realtimeKey?: string,
  ) {

    this.gateway.server.emit('todo', {
      collection: 'todo',
      type: 'MODIFY',
      payload: { id, body },
    });

    if (realtimeKey) {
      this.gateway.server.emit(realtimeKey, {
        collection: 'todo',
        type: 'MODIFY',
        payload: { id, body },
        key: realtimeKey,
      });
    }

    return this.todos.modifiyValue(id, body.field, body.delta);

  }

}
