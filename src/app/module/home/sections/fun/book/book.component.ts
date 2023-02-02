import { Component, Input } from '@angular/core';
import { Book } from '../../../../../shared/models/Book';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['../../../home.component.scss'],
})
export class BookComponent {
    @Input() book!: Book;
}
