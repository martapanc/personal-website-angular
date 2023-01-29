import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {CvComponent} from "./core/cv/cv.component";
import {ProjectsComponent} from "./core/projects/projects.component";
import {FoodComponent} from "./core/food/food.component";
import {TravelComponent} from "./core/travel/travel.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cv', component: CvComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'food', component: FoodComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
