import { Component, Input } from '@angular/core';
import { ProgrammingLanguage } from '../../../../../shared/models/ProgrammingLanguage';

@Component({
    selector: 'app-programming-language',
    templateUrl: './programming-language.component.html',
})
export class ProgrammingLanguageComponent {
    @Input() programmingLanguage!: ProgrammingLanguage;
    // @Input() display!: boolean;
}
