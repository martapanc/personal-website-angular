import { Component } from '@angular/core';
import PublicationsData from './publications-data';

@Component({
    selector: 'app-publications',
    templateUrl: './publications.component.html',
    styleUrls: ['../../home.component.scss'],
})
export class PublicationsComponent {
    publicationsData = PublicationsData;
}
