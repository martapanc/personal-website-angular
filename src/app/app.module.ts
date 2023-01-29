import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {HomeComponent} from './core/home/home.component';
import {CvComponent} from './core/cv/cv.component';
import {ProjectsComponent} from './core/projects/projects.component';
import {TravelComponent} from './core/travel/travel.component';
import {FoodComponent} from './core/food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    CvComponent,
    ProjectsComponent,
    TravelComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
