
import { Hero } from './hero.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HeroDto } from './hero.dto';

@Injectable()
export class HeroService {

  constructor(
    @InjectRepository(Hero)
    private readonly repo: Repository<Hero>,
  ) {}

  findAll(): Promise<Hero[]> {
    return this.repo.find();
  }

  findOne(id: string): Promise<Hero> {
    return this.repo.findOne(id);
  }

  find(query: any): Promise<Hero[]> {
    return this.repo.find(query);
  }

  create(body: HeroDto): Promise<Hero> {

    const hero = new Hero();
    // hero.text = body.text;
    hero.nombre = body.nombre;

    return this.repo.save(hero);

  }

  delete(id: string) {
    return this.repo.delete(id);
  }

  update(id: string, body: HeroDto) {
    return this.repo.update(id, body);
  }

}
