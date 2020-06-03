import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffinfoModule } from './staffinfo/staffinfo.module';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity';
import { StaffBio } from './staffinfo/staffinfo.entity';
  
@Module({
  imports: [ 
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.RDS_HOSTNAME || 'localhost',
    port: parseInt(process.env.RDS_PORT)  || 5432 ,
    username:  process.env.RDS_USERNAME  || 'postgres',
    password: process.env.RDS_PASSWORD || 'mashery',
    database: process.env.RDS_DB_NAME || 'etedatabase',
    entities: [Student,StaffBio],
    synchronize: true,
  }),
    StaffinfoModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
  
}
