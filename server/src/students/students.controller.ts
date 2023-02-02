import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { Istudent } from 'src/dtos/student.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentService: StudentsService) {}

  @Get()
  getStudents(@Query() query: any) {
    return this.studentService.getStudents(query.p);
  }

  @Get(':id')
  getStudent(@Param() params: any) {
    return this.studentService.getStudent(params.id);
  }

  @Post()
  addStudent(@Body() student: Istudent) {
    return this.studentService.addStudent(student);
  }

  @Delete('')
  deleteStudent(@Query() query: any) {
    return this.studentService.deleteStudent(query.id);
  }

  @Put('')
  updateStudent(@Body() student: Istudent, @Query() query: any) {
    return this.studentService.updateStudent(student, query.id);
  }

  @Get('count/students')
  getCountStudent() {
    return this.studentService.getCountStudents();
  }
}
