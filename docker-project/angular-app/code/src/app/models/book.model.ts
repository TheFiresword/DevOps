import { BookStatus } from "./book-status.enum";

export interface Book{
    title: string;
    author: string;
    status?: BookStatus;
    review?: string;
    rating?: number;
}