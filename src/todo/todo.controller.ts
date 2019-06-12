
import { Controller, Get, Param, Post, Body, Delete, Patch } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './todo.dto';
import { TodoGateway } from './todo.gateway';
import md5 from 'md5';

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
  ) {

    const todo = await this.todos.create(body);

    this.gateway.server.emit('todo', {
      collection: 'todo',
      type: 'CREATE',
      payload: todo,
     });

    return todo;

  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
  ) {

    this.gateway.server.emit('todo', {
      collection: 'todo',
      type: 'DELETE',
      payload: { id },
    });

    return this.todos.delete(id);

  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: TodoDto,
  ) {

    this.gateway.server.emit('todo', {
      collection: 'todo',
      type: 'UPDATE',
      payload: { id, body },
    });

    return this.todos.update(id, body);

  }

}
