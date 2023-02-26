import { Component } from '@angular/core';

@Component({
    selector: 'app-food',
    templateUrl: './food.component.html',
    styleUrls: ['../home/home.component.scss'],
})
export class FoodComponent {
    flexBorderSize = 10;
    flexImageSize = 10;
    maxRowsPerPage = 100;
}
