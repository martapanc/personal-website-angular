import { Component } from '@angular/core';
import { PhotoAlbumData } from './album-thumbnail/photo-album-data';

@Component({
    selector: 'app-travel',
    templateUrl: './travel.component.html',
    styleUrls: ['../home/home.component.scss'],
})
export class TravelComponent {
    photoAlbumData = PhotoAlbumData;
}
