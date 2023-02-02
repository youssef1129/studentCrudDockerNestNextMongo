/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type studentDocument = HydratedDocument<student>;

@Schema()
export class student {
  @Prop({ required: true })
  firstName: string;
  @Prop({ required: true })
  lastName: string;
  @Prop({ required: true })
  birthday: Date;
  @Prop({ required: true, unique: true })
  email: string;
}


export const studentSchema = SchemaFactory.createForClass(student);
