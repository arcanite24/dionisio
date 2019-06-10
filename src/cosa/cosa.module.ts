
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CosaService } from './cosa.service';
import { CosaController } from './cosa.controller';
import { Cosa } from './cosa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cosa])],
  providers: [CosaService],
  controllers: [CosaController],
})
export class CosaModule {}
