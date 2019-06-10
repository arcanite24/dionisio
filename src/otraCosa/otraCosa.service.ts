
import { OtraCosa } from './otraCosa.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OtraCosaDto } from './otraCosa.dto';

@Injectable()
export class OtraCosaService {

  constructor(
    @InjectRepository(OtraCosa)
    private readonly repo: Repository<OtraCosa>,
  ) {}

  findAll(): Promise<OtraCosa[]> {
    return this.repo.find();
  }

  findOne(id: string): Promise<OtraCosa> {
    return this.repo.findOne(id);
  }

  find(query: any): Promise<OtraCosa[]> {
    return this.repo.find(query);
  }

  create(body: OtraCosaDto): Promise<OtraCosa> {

    const otraCosa = new OtraCosa();
    // otraCosa.text = body.text;

    return this.repo.save(otraCosa);

  }

  delete(id: string) {
    return this.repo.delete(id);
  }

  update(id: string, body: OtraCosaDto) {
    return this.repo.update(id, body);
  }

}
