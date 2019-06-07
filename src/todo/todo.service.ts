
import { Todo } from './todo.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoDto } from './todo.dto';

@Injectable()
export class TodoService {

  constructor(
    @InjectRepository(Todo)
    private readonly repo: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.repo.find();
  }

  findOne(id: string): Promise<Todo> {
    return this.repo.findOne(id);
  }

  find(query: any): Promise<Todo[]> {
    return this.repo.find(query);
  }

  create(body: TodoDto): Promise<Todo> {

    const todo = new Todo();
    todo.text = body.text;

    return this.repo.save(todo);

  }

  delete(id: string) {
    return this.repo.delete(id);
  }

  update(id: string, body: TodoDto) {
    return this.repo.update(id, body);
  }

}
