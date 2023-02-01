import { Component } from '@angular/core';
import workExperienceData from './work-experience/work-experience-data';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['../../home.component.scss'],
})
export class WorkComponent {
    workExperienceData = workExperienceData;
}
