import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faCode, faEllipsisV, faFileAlt, faImages, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../../shared/models/Project';
import { faGithub, faGooglePlay, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['../projects.component.scss'],
})
export class ProjectCardComponent implements OnInit {
    @Input() project!: Project;

    @ViewChild('cardContent') cardContent!: ElementRef;
    @ViewChild('cardReveal') cardReveal!: ElementRef;

    isExpanded = false;
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

    fontSize = '24px';
    paddingTop = '0';

    ngOnInit() {
        this.fontSize = this.project.title.length > 30 ? '18px' : '24px';
        this.paddingTop = this.project.title.length > 30 ? '5px' : '0';
    }

    expandInfoPanel() {
        this.isExpanded = true;
    }

    closeInfoPanel() {
        this.isExpanded = false;
    }
}
