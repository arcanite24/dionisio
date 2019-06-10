
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OtraCosaService } from './otraCosa.service';
import { OtraCosaController } from './otraCosa.controller';
import { OtraCosa } from './otraCosa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OtraCosa])],
  providers: [OtraCosaService],
  controllers: [OtraCosaController],
})
export class OtraCosaModule {}
