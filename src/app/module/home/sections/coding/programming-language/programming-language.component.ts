import { Component, Input } from '@angular/core';
import { ProgrammingLanguage } from '../../../../../shared/models/ProgrammingLanguage';

@Component({
    selector: 'app-programming-language',
    templateUrl: './programming-language.component.html',
    styleUrls: ['../../../home.component.scss'],
})
export class ProgrammingLanguageComponent {
    @Input() programmingLanguage!: ProgrammingLanguage;
    // @Input() display!: boolean;
}
