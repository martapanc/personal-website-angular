import { Component, ElementRef, ViewChild } from '@angular/core';
import { faGithub, faGoodreads, faInstagram, faLinkedin, faSteam } from '@fortawesome/free-brands-svg-icons';
import { faCode, faFileAlt, faGlobe, faPizzaSlice, faUser } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from '../../shared/models/MenuItem';
import { SocialMediaLink } from '../../shared/models/SocialMediaLink';
import { TranslateService } from '@ngx-translate/core';

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
        { icon: faUser, title: this.translate('about'), url: '/' },
        { icon: faFileAlt, title: this.translate('cv'), url: '/cv' },
        { icon: faCode, title: this.translate('projects'), url: '/projects' },
        { icon: faGlobe, title: this.translate('travel'), url: '/travel' },
        { icon: faPizzaSlice, title: this.translate('food'), url: '/food' },
    ];

    constructor(private translateService: TranslateService) {}

    toggleMobileSidebar() {
        this.isNavbarExpanded = !this.isNavbarExpanded;
        this.navbarTogglerButton.nativeElement.setAttribute('aria-expanded', this.isNavbarExpanded.toString());
    }

    private translate(key: string): string {
        return 'i18n.sidebar.menu.' + key;
    }

    changeLanguage(langCode: string) {
        this.translateService.use(langCode);
        localStorage.setItem('saved_language', langCode);
    }
}
