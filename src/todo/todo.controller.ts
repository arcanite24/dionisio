import { Controller, Get, Param, Post, Body, Delete, Patch } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './todo.dto';

@Controller('todo')
export class TodoController {

  constructor(
    private todos: TodoService,
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
  create(
    @Body() body: TodoDto,
  ) {
    return this.todos.create(body);
  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
  ) {
    return this.todos.delete(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: TodoDto,
  ) {
    return this.todos.update(id, body);
  }

}
