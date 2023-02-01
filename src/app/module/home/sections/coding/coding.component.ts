import { Component } from '@angular/core';
import LanguageData from './programming-language/programming-language-data';
import { ProgrammingLanguage } from '../../../../shared/models/ProgrammingLanguage';

@Component({
    selector: 'app-coding',
    templateUrl: './coding.component.html',
})
export class CodingComponent {
    languageData: ProgrammingLanguage[] = LanguageData;
    showReadMoreButton = true;
    expandItems = 99;

    expand() {
        this.showReadMoreButton = false;
        this.expandItems = 3;
    }
}
