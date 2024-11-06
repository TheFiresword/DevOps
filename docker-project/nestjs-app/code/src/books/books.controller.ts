import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service.spec';
import { Book } from './book.schema';
import { CreateBookDto } from './create-book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService){}

    @Post()
    create(@Body() createBookDto: CreateBookDto): Promise<Book>{
        return this.booksService.create(createBookDto);
    }

    @Get()
    findAll(): Promise<Book[]> {
        return this.booksService.findAll();
    }

    @Get(':author')
    findAByAuthor(@Param('author') author: string): Promise<Book[]> {
        return this.booksService.findByAuthor(author);
    }
}
