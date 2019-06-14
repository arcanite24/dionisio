import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { VerduraService } from './verdura.service';
import { VerduraGateway } from './verdura.gateway';
import { VerduraController } from './verdura.controller';
import { Verdura } from './verdura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Verdura])],
  providers: [
    VerduraService,
    VerduraGateway,
  ],
  controllers: [VerduraController],
})
export class VerduraModule {}
