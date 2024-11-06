import { Component } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { BookStatus } from '../../models/book-status.enum';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent {
  book: Book = {title: '', author: '', status: BookStatus.T, review: '', rating: 0};

  constructor(private bookService: BookService){}

  addBook(): void {
    this.bookService.addBook(this.book).subscribe();
  }
}
