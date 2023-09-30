import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { OurCurriculumsComponent } from './main-pages/our-curriculums/our-curriculums.component';

import { OurSchoolComponent } from './main-pages/our-school/our-school.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SubMenuHomeComponent } from './shared/sub-menu-home/sub-menu-home.component';

import { HeadTeacherWelcomeComponent } from './sub-pages/head-teacher-welcome/head-teacher-welcome.component';

import { HttpClientModule } from '@angular/common/http';
import { SafeguardingComponent } from './main-pages/safeguarding/safeguarding.component'; // Import HttpClientModule
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    QuickLinksComponent,
    OurCurriculumsComponent,

    OurSchoolComponent,
    WelcomeMessageComponent,
    LatestNewsComponent,
    NavBarComponent,
    SubMenuHomeComponent,
    HeadTeacherWelcomeComponent,
    SafeguardingComponent,

  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [{provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
