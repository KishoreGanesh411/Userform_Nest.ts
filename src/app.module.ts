import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { MongoModule } from './mongo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongoModule, BookModule, AuthModule],
})
export class AppModule {}
