import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { Studentdto } from './studentdto';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepo: Repository<Student>,
      ) {}

    async createStudent(studentdata: Studentdto) {

        const {firstname,lastname,age,degree,year} =studentdata

        const student = new Student();
        student.firstName = firstname;
        student.lastName = lastname;
        student.age = age;
        student.degree = degree;
        student.year = year;

        await this.studentRepo.save(student)
        return studentdata;
    }

    async findall() {
        return  await this.studentRepo.findAndCount()
        
    }

    async findbyid(id) {
         return await this.studentRepo.find({lastName: id.name})
    }

}
