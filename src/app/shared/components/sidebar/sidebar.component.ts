import { Component } from '@angular/core';
import {
    faGithub,
    faGoodreads,
    faInstagram,
    faLinkedin,
    faSteam,
} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
    icons = {
        faGithub,
        faGoodreads,
        faInstagram,
        faLinkedin,
        faSteam,
    };

    toggleMobileSidebar() {
        console.log('To do');
    }
}
