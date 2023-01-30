import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'Marta Pancaldi';

    constructor(translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        const browserLang = translate.getBrowserLang();
        const savedLang = localStorage.getItem('saved_language');

        if (savedLang) {
            translate.use(savedLang);
        } else if (browserLang) {
            translate.use(browserLang);
        }
    }
}
