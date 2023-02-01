import { Component } from '@angular/core';
import LanguageData from './programming-language/programming-language-data';
import { ProgrammingLanguage } from '../../../../shared/models/ProgrammingLanguage';

@Component({
    selector: 'app-coding',
    templateUrl: './coding.component.html',
    styleUrls: ['../../home.component.scss'],
})
export class CodingComponent {
    languageData: ProgrammingLanguage[] = LanguageData;
    showExpandedSection = false;

    expand() {
        this.showExpandedSection = true;
    }
}
