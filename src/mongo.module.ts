/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('Your Database Url')]
})
export class MongoModule {
  constructor() {
    console.log(process.env.DB_URI)
  }
}
