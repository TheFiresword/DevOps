import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './create-book.dto';

@Injectable()
export class BooksService {
    create(createBookDto: CreateBookDto): Promise<import("./book.schema").Book> {
        throw new Error('Method not implemented.');
    }
}
