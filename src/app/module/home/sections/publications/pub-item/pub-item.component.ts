import { Component, Input } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Publication } from '../../../../../shared/models/Publication';

@Component({
    selector: 'app-pub-item',
    templateUrl: './pub-item.component.html',
    styleUrls: ['../../../home.component.scss'],
})
export class PubItemComponent {
    @Input() publication!: Publication;

    icons = { faExternalLinkAlt };
}
