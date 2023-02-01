import { Component, Input } from '@angular/core';
import { School } from '../../../../../shared/models/School';

@Component({
    selector: 'app-school',
    templateUrl: './school.component.html',
    styleUrls: ['../../../home.component.scss'],
})
export class SchoolComponent {
    @Input() school!: School;
}
