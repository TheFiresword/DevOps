import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './book.schema';
import { CreateBookDto } from './create-book.dto';

@Injectable()
export class BooksService{
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>){}

  async create(bookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(bookDto);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findByAuthor(author: string): Promise<Book[]>{
    return this.bookModel.find({ author }).exec();
  }
}