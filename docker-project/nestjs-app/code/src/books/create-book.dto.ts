export class CreateBookDto {
    title: string;
    author: string;
    status?: 'to-read' | 'reading' | 'finished';
    review?: string;
    rating?: number;
  }
  