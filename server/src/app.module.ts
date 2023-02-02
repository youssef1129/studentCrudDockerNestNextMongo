/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { StudentsModule } from './students/students.module';
require('dotenv').config({ path: '.env' });
const dotenv = require('dotenv');
dotenv.config();

@Module({
  imports: [
    StudentsModule,
    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME,
      auth: {
        password: process.env.DB_PASSWORD,
        username: process.env.DB_USERNAME,
      },
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
