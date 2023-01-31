import { Component } from '@angular/core';
import { faCode, faFileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
})
export class IntroComponent {
    icons = {
        faCode,
        faFileAlt,
    };
}
