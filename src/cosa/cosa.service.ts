
import { Cosa } from './cosa.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CosaDto } from './cosa.dto';

@Injectable()
export class CosaService {

  constructor(
    @InjectRepository(Cosa)
    private readonly repo: Repository<Cosa>,
  ) {}

  findAll(): Promise<Cosa[]> {
    return this.repo.find();
  }

  findOne(id: string): Promise<Cosa> {
    return this.repo.findOne(id);
  }

  find(query: any): Promise<Cosa[]> {
    return this.repo.find(query);
  }

  create(body: CosaDto): Promise<Cosa> {

    const cosa = new Cosa();
    cosa.text = body.text;

    return this.repo.save(cosa);

  }

  delete(id: string) {
    return this.repo.delete(id);
  }

  update(id: string, body: CosaDto) {
    return this.repo.update(id, body);
  }

}
