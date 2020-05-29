import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staffdto } from './staffdto';
import { StaffBio } from './staffinfo.entity';

@Injectable()
export class StaffinfoService {
   constructor(
      @InjectRepository(StaffBio)
      private staffRepo: Repository<StaffBio>,
    ) {
 
    }

   async createStaffBio(staffbio: Staffdto) {
     const {   firstName, middleName, lastName, mobileNumber, telephoneNumber, staffId,
      email,  website, position, highestEducation, researchGroup, officeNo,
      administrativeRole   } = staffbio;
 
      const info = new StaffBio();
      info.firstName = firstName;
      info.middleName = middleName;
      info.lastName = lastName;
      info.mobileNumber = mobileNumber;
      info.telephoneNumber = telephoneNumber;
      info.staffId = staffId;
      info.email = email; 
      info.website = website;
      info.position = position;
      info.highestEducation = highestEducation;
      info.researchGroup = researchGroup;
      info.officeNo = officeNo;
      info.administrativeRole = administrativeRole;
      
      await this.staffRepo.save(info);
      return  {response: 'Staff details susscessfully saved'}; 
      }
 
      async getall() {
        return  await this.staffRepo.find();  
      }

      async delete( staffobj: Staffdto ) { 
        await this.staffRepo.delete( staffobj.selectedData );
        return { response: 'items deleted' }
        
      }
}  
 