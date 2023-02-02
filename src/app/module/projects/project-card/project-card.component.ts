import { Component, Input } from '@angular/core';
import { faCode, faEllipsisV, faFileAlt, faImages, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../../shared/models/Project';
import { faGithub, faGooglePlay, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styles: [],
})
export class ProjectCardComponent {
    @Input() project!: Project;

    icons = {
        faEllipsisV,
        faGithub,
        faCode,
        faFileAlt,
        faNewspaper,
        faYoutube,
        faImages,
        faGooglePlay,
    };
}
