import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HomeComponent } from './core/home/home.component';
import { CvComponent } from './core/cv/cv.component';
import { ProjectsComponent } from './core/projects/projects.component';
import { TravelComponent } from './core/travel/travel.component';
import { FoodComponent } from './core/food/food.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialMediaLinkComponent } from './shared/components/social-media-link/social-media-link.component';
import { MenuItemComponent } from './shared/components/menu-item/menu-item.component';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        HomeComponent,
        CvComponent,
        ProjectsComponent,
        TravelComponent,
        FoodComponent,
        SocialMediaLinkComponent,
        MenuItemComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
