import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StaffBio {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  firstName: string;

  @Column()
  middleName: string;

  @Column()
  lastName: string;

  @Column()
  mobileNumber: number

  @Column()
  telephoneNumber: string

  @Column()
  staffId: number

  @Column()
  email: string;

  @Column()
  website: string;

  @Column()
  position: string;

  @Column()
  highestEducation: string;

  @Column()
  researchGroup: string;

  @Column()
  officeNo: string;

  @Column()
  administrativeRole: string;
} 
 