import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuItemComponent } from './sidebar/menu-item/menu-item.component';
import { SocialMediaLinkComponent } from './sidebar/social-media-link/social-media-link.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLoaderFactory } from '../app.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        FontAwesomeModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
    ],
    declarations: [SidebarComponent, MenuItemComponent, SocialMediaLinkComponent, FooterComponent, HeaderComponent],
    exports: [SidebarComponent, FooterComponent, HeaderComponent],
})
export class CoreModule {}
