import { Component } from '@angular/core';
import { PhotoAlbumData } from './album-thumbnail/photo-album-data';

@Component({
    selector: 'app-travel',
    templateUrl: './travel.component.html',
    styleUrls: ['../home/home.component.scss'],
})
export class TravelComponent {
    photoAlbumData = PhotoAlbumData;

    flexBorderSize = 10;
    flexImageSize = 11;
    maxRowsPerPage = 100;
    viewerEnabled = false;
    galleryName = 'travel';
}
