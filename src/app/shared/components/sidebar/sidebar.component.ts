import { Component, ElementRef, ViewChild } from '@angular/core';
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
import { MenuItem } from '../../models/MenuItem';
import { SocialMediaLink } from '../../models/SocialMediaLink';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
    @ViewChild('navbarTogglerButton') navbarTogglerButton!: ElementRef;
    @ViewChild('navbar') navbar!: ElementRef;

    isNavbarExpanded = false;

    socialMediaLinks: SocialMediaLink[] = [
        { icon: faLinkedin, url: 'https://www.linkedin.com/in/martapancaldi/' },
        { icon: faGithub, url: 'https://github.com/martapanc/' },
        { icon: faInstagram, url: 'https://www.instagram.com/pancakemarta/' },
        { icon: faGoodreads, url: 'https://www.goodreads.com/topolinamarta/' },
        { icon: faSteam, url: 'https://steamcommunity.com/id/martap/' },
    ];

    menuItems: MenuItem[] = [
        { icon: faUser, title: 'About me', url: '/' },
        { icon: faFileAlt, title: 'CV', url: '/cv' },
        { icon: faCode, title: 'Projects', url: '/projects' },
        { icon: faGlobe, title: 'Travel Pictures', url: '/travel' },
        { icon: faPizzaSlice, title: 'Food Pictures', url: '/food' },
    ];

    toggleMobileSidebar() {
        this.isNavbarExpanded = !this.isNavbarExpanded;
        this.navbarTogglerButton.nativeElement.setAttribute(
            'aria-expanded',
            this.isNavbarExpanded.toString()
        );
    }
}
