import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './module/home/home.component';
import { CvComponent } from './module/cv/cv.component';
import { ProjectsComponent } from './module/projects/projects.component';
import { TravelComponent } from './module/travel/travel.component';
import { FoodComponent } from './module/food/food.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [CoreModule, AppRoutingModule],
    declarations: [
        AppComponent,
        HomeComponent,
        CvComponent,
        ProjectsComponent,
        TravelComponent,
        FoodComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
