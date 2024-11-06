import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiBooks = environment.API_URL + "/books";
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiBooks);
  }

  getBooksByAuthor(author: string): Observable<Book[]>{
    return this.http.get<Book[]>(this.apiBooks + `/${author}`);
  }

  addBook(book: Book): Observable<any> {
    return this.http.post<Book>(this.apiBooks, book);
  }
}
