import { Module } from '@nestjs/common';
import { BooksService } from './books.service.spec';
import { BooksController } from './books.controller';
import { Book, BookSchema } from './book.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [BooksService],
  controllers: [BooksController],
  imports: [MongooseModule.forFeature([{name: Book.name, schema: BookSchema}])]
})
export class BooksModule {}
