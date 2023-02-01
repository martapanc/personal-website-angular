import { Component } from '@angular/core';
import schoolData from './school/school-data';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['../../home.component.scss'],
})
export class EducationComponent {
    schoolData = schoolData;
}
