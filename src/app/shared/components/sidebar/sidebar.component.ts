import { Component } from '@angular/core';
import {
    faGithub,
    faGoodreads,
    faInstagram,
    faLinkedin,
    faSteam,
} from '@fortawesome/free-brands-svg-icons';
import {
    faCode,
    faFileAlt,
    faGlobe,
    faPizzaSlice,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
    socialMediaLinks = [
        { icon: faLinkedin, url: 'https://www.linkedin.com/in/martapancaldi/' },
        { icon: faGithub, url: 'https://github.com/martapanc/' },
        { icon: faInstagram, url: 'https://www.instagram.com/pancakemarta/' },
        { icon: faGoodreads, url: 'https://www.goodreads.com/topolinamarta/' },
        { icon: faSteam, url: 'https://steamcommunity.com/id/martap/' },
    ];

    menuItems = [
        { icon: faUser, title: 'About me' },
        { icon: faFileAlt, title: 'CV' },
        { icon: faCode, title: 'Projects' },
        { icon: faGlobe, title: 'Travel Pictures' },
        { icon: faPizzaSlice, title: 'Food Pictures' },
    ];

    toggleMobileSidebar() {
        console.log('To do');
    }
}
