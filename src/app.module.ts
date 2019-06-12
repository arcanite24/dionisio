import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

// dionisio.modules
import { HeroModule } from './hero/hero.module';
import { OtraCosaModule } from './otraCosa/otraCosa.module';
import { CosaModule } from './cosa/cosa.module';
import { TodoModule } from './todo/todo.module';

// dionisio.entities
import { Hero } from './hero/hero.entity';
import { OtraCosa } from './otraCosa/otraCosa.entity';
import { Cosa } from './cosa/cosa.entity';
import { Todo } from './todo/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'dionisio',
      entities: [
        // dionisio.orm
        Hero,
        OtraCosa,
        Cosa,
        Todo,
      ],
      synchronize: true,
    }),
    // dionisio.imports
    HeroModule,
    OtraCosaModule,
    CosaModule,
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
