import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProfileService } from './Services/profile.service';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/Components/home/home.component';
import { HighlightDirective } from './highlight.directive';
import { TitleCasePipe } from './title-case.pipe';
import { NotFoundComponent } from './Components/not-found/not-found.component';

import { GitSearchComponent } from '../app/Components/git-search/git-search.component';
import { NavbarComponent } from '../app/Components/navbar/navbar.component';
import { FooterComponent } from '../app/Components/footer/footer.component';
import { DatePipe } from './date.pipe';

import { AboutComponent } from '../app/Components/about/about.component';

import { NgProgressRouterModule } from 'ngx-progressbar/router';
import { SearchFormComponent } from './Components/search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DatePipe,
    HighlightDirective,
    AboutComponent,
    NotFoundComponent,
    GitSearchComponent,
    TitleCasePipe,
    HomeComponent,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule,
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
