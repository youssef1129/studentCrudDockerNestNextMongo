import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { student, studentSchema } from 'src/schemas/student.schema';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ schema: studentSchema, name: student.name }]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
