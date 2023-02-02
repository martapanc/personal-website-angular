import { Component } from '@angular/core';
import { BookData } from '../book/BookData';

@Component({
    selector: 'app-book-section',
    templateUrl: './book-section.component.html',
    styleUrls: ['../../../home.component.scss'],
})
export class BookSectionComponent {
    bookData = BookData;
}
