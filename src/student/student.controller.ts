import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { Studentdto } from './studentdto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor(private studentservice: StudentService) {}

    @Post()
   async createStudent(@Body() studentdata: Studentdto) {
      return  await this.studentservice.createStudent(studentdata);
    }

    @Get() 
    async findbyid(@Query() id) {
        return await this.studentservice.findbyid(id)
    }

    @Get()
    async findall() {
        return this.studentservice.findall()
    }


}
