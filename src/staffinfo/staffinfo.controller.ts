import { Controller, Get, Post, Put, Body, Delete,  Query } from '@nestjs/common';
import { Staffdto } from './staffdto'
import { StaffinfoService } from './staffinfo.service';

   
@Controller('staffinfo')
export class StaffinfoController {

    constructor(private staffservice: StaffinfoService) {}

@Post()
async createStudent(@Body() staffbio: Staffdto) {
    return this.staffservice.createStaffBio(staffbio)
}

@Post('multiple')
async createmultiple() {
    return this.staffservice.createmultiple();
}
 
@Get()
async findstaff() {
    return await this.staffservice.getall()
}

@Put()
updateStudent(): string {
   return 'student record successfully updated'
}

@Delete()
 async deletestaff( @Query() staffobj ) {
     return  await this.staffservice.delete( staffobj);
 } 
}
