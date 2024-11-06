import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
    @Prop({ required: true})
    title: string;

    @Prop({ required: true})
    author: string;

    @Prop({ enum: ['to_read', 'reading', 'finished'], default: 'to_read'})
    status: string;

    @Prop()
    review: string;

    
    @Prop({min: 1, max: 5})
    rating: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);