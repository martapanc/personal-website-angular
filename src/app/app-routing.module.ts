import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { CvComponent } from './module/cv/cv.component';
import { ProjectsComponent } from './module/projects/projects.component';
import { FoodComponent } from './module/food/food.component';
import { TravelComponent } from './module/travel/travel.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'cv', component: CvComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'travel', component: TravelComponent },
    { path: 'food', component: FoodComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
