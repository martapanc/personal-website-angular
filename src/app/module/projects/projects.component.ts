import { Component } from '@angular/core';
import { ProjectData } from './project-card/project-data';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss', '../home/home.component.scss'],
})
export class ProjectsComponent {
    projectData = ProjectData;
}
