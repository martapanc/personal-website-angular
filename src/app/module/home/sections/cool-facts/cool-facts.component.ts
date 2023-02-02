import { Component, OnInit } from '@angular/core';
import { ComingSoon, CoolFactsData } from './cool-facts-data';
import { CoolFact } from '../../../../shared/models/CoolFact';

@Component({
    selector: 'app-cool-facts',
    templateUrl: './cool-facts.component.html',
    styleUrls: ['../../home.component.scss'],
})
export class CoolFactsComponent implements OnInit {
    coolFacts: CoolFact[] = CoolFactsData;
    comingSoon = ComingSoon;
    coolFactText = '';
    factIndex = 0;
    hideButton = false;

    ngOnInit(): void {
        this.coolFacts = this.shuffle(this.coolFacts);
        this.coolFactText = this.coolFacts[0].text;
    }

    nextFact() {
        this.factIndex++;
        if (this.coolFacts.length > this.factIndex) {
            this.coolFactText = this.coolFacts[this.factIndex].text;
        } else {
            this.coolFactText = this.comingSoon;
            this.hideButton = true;
        }
    }
    private shuffle(array: CoolFact[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}
