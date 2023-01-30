import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-social-media-link',
    templateUrl: './social-media-link.component.html',
    styleUrls: ['./social-media-link.component.scss'],
})
export class SocialMediaLinkComponent {
    @Input() icon!: IconDefinition;
    @Input() url!: string;
}
