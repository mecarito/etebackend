import { Controller, Get, Post, Put, Body  } from '@nestjs/common';
import { Staffdto } from 'src/staffinfo/staffdto'
import { StaffinfoService } from './staffinfo.service';


@Controller('staffinfo')
export class StaffinfoController {

    constructor(private staffservice: StaffinfoService) {}

@Post()
async createStudent(@Body() staffbio: Staffdto) {
    return this.staffservice.createStaffBio(staffbio)
}
 
@Get()
async findstaff() {
    return await this.staffservice.getall()
}

@Put()
updateStudent(): string {
   return 'student record successfully updated'
}
}
