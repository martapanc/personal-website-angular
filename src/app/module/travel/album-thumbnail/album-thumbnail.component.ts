import { Component, Input } from '@angular/core';
import { PhotoAlbum } from '../../../shared/models/PhotoAlbum';

@Component({
    templateUrl: './album-thumbnail.component.html',
    selector: 'app-album-thumbnail',
    styleUrls: ['./album-thumbnail.component.scss'],
})
export class AlbumThumbnailComponent {
    @Input() albumData!: PhotoAlbum;
}
