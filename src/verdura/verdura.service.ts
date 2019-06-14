import { Verdura } from './verdura.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VerduraDto } from './verdura.dto';

@Injectable()
export class VerduraService {

  constructor(
    @InjectRepository(Verdura)
    private readonly repo: Repository<Verdura>,
  ) {}

  findAll(): Promise<Verdura[]> {
    return this.repo.find();
  }

  findOne(id: string): Promise<Verdura> {
    return this.repo.findOne(id);
  }

  find(query: any): Promise<Verdura[]> {
    return this.repo.find(query);
  }

  create(body: VerduraDto): Promise<Verdura> {

    const verdura = new Verdura();
    verdura.text = body.text;

    return this.repo.save(verdura);

  }

  delete(id: string) {
    return this.repo.delete(id);
  }

  update(id: string, body: VerduraDto) {
    return this.repo.update(id, body);
  }

}
