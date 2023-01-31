import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import firebase from 'firebase/compat/app';
import initializeApp = firebase.initializeApp;
import { getAnalytics } from 'firebase/analytics';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'Marta Pancaldi';

    constructor(translate: TranslateService) {
        this.setupTranslations(translate);
        this.setupFirebase();
    }

    private setupTranslations(translate: TranslateService) {
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

    private setupFirebase() {
        const firebaseConfig = {
            apiKey: 'AIzaSyBKThDZUCb0XQ3fG0zNjFX15Bb436UGdoI',
            authDomain: 'mpancaldi-angular.firebaseapp.com',
            projectId: 'mpancaldi-angular',
            storageBucket: 'mpancaldi-angular.appspot.com',
            messagingSenderId: '643681442779',
            appId: '1:643681442779:web:01ff99a3be95e37a29e5fe',
            measurementId: 'G-CVGZV7M5YR',
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
    }
}
