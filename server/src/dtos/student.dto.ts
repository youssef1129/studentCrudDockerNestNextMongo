/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class Istudent {
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  lastName: string;
  @IsString()
  @IsNotEmpty()
  birthday: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
