import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import e from 'express';
import { Model } from 'mongoose';
import { Istudent } from 'src/dtos/student.dto';
import { student, studentDocument } from 'src/schemas/student.schema';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(student.name) private studentModel: Model<studentDocument>,
  ) {}

  async getStudents(p = 0) {
    return await this.studentModel.find().skip(p).limit(4);
  }

  async addStudent(student: Istudent) {
    try {
      return await this.studentModel.create(student);
    } catch {
      throw new HttpException('bad request', HttpStatus.BAD_REQUEST);
    }
  }

  async deleteStudent(id: string) {
    try {
      return await this.studentModel.findOneAndDelete({ id: id });
    } catch {
      throw new HttpException('bad request', HttpStatus.BAD_REQUEST);
    }
  }

  async updateStudent(student: Istudent, id: string) {
    try {
      return await this.studentModel.findOneAndUpdate({ id: id }, student);
    } catch {
      throw new HttpException('bad request', HttpStatus.BAD_REQUEST);
    }
  }

  async getStudent(id: string) {
    try {
      return await this.studentModel.findOne({ _id: id });
    } catch {
      throw new HttpException('bad request', HttpStatus.BAD_REQUEST);
    }
  }

  async getCountStudents() {
    try {
      const g = await this.studentModel.find().count();
      return { count: g, pages: Math.ceil(g / 4) };
    } catch {
      throw new HttpException('bad request', HttpStatus.BAD_REQUEST);
    }
  }
}
