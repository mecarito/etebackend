import { Module } from '@nestjs/common';
import { StaffinfoController } from './staffinfo.controller';
import { StaffinfoService } from './staffinfo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffBio } from './staffinfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StaffBio])],
  controllers: [StaffinfoController],
  providers: [StaffinfoService]
})
export class StaffinfoModule {}
