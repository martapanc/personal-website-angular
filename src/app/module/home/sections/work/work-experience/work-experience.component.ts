import { Component, Input } from '@angular/core';
import { WorkExperience } from '../../../../../shared/models/WorkExperience';

@Component({
    selector: 'app-work-experience',
    templateUrl: './work-experience.component.html',
    styleUrls: ['../../../home.component.scss'],
})
export class WorkExperienceComponent {
    @Input() workExperience!: WorkExperience;
}
