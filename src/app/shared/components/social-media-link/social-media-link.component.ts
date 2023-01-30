import { Component, Input } from '@angular/core';
import { SocialMediaLink } from '../../models/SocialMediaLink';

@Component({
    selector: 'app-social-media-link',
    templateUrl: './social-media-link.component.html',
    styleUrls: ['./social-media-link.component.scss'],
})
export class SocialMediaLinkComponent {
    @Input() socialMediaLink!: SocialMediaLink;
}
