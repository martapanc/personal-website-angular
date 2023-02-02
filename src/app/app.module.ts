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
import { IntroComponent } from './module/home/sections/intro/intro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CodingComponent } from './module/home/sections/coding/coding.component';
import { ProgrammingLanguageComponent } from './module/home/sections/coding/programming-language/programming-language.component';
import { NgClass, NgForOf, NgIf, SlicePipe } from '@angular/common';
import { WorkComponent } from './module/home/sections/work/work.component';
import { WorkExperienceComponent } from './module/home/sections/work/work-experience/work-experience.component';
import { EducationComponent } from './module/home/sections/education/education.component';
import { SchoolComponent } from './module/home/sections/education/school/school.component';
import { LanguagesComponent } from './module/home/sections/languages/languages.component';
import { PublicationsComponent } from './module/home/sections/publications/publications.component';
import { GithubComponent } from './module/home/sections/github/github.component';
import { PubItemComponent } from './module/home/sections/publications/pub-item/pub-item.component';
import { FunComponent } from './module/home/sections/fun/fun.component';
import { BookSectionComponent } from './module/home/sections/fun/book-section/book-section.component';
import { BookComponent } from './module/home/sections/fun/book/book.component';
import { CoolFactsComponent } from './module/home/sections/cool-facts/cool-facts.component';
import { ProjectCardComponent } from './module/projects/project-card/project-card.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [CoreModule, AppRoutingModule, FontAwesomeModule, NgForOf, NgClass, SlicePipe, NgIf],
    declarations: [
        AppComponent,
        HomeComponent,
        CvComponent,
        ProjectsComponent,
        TravelComponent,
        FoodComponent,
        IntroComponent,
        CodingComponent,
        ProgrammingLanguageComponent,
        WorkComponent,
        WorkExperienceComponent,
        EducationComponent,
        SchoolComponent,
        LanguagesComponent,
        PublicationsComponent,
        GithubComponent,
        PubItemComponent,
        FunComponent,
        BookSectionComponent,
        BookComponent,
        CoolFactsComponent,
        ProjectCardComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
