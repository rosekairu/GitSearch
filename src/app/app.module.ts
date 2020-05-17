import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './Services/profile.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SearchFormComponent } from './Components/search-form/search-form.component';
import { DatePipe } from './date.pipe';
import { HighlightDirective } from './highlight.directive';
import { AboutComponent } from './Components/about/about.component';
import { UsersComponent } from './Components/users/users.component';
//import { RepositoriesComponent } from './Components/repositories/repositories.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';
import { GitSearchComponent } from './Components/git-search/git-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchFormComponent,
    DatePipe,
    HighlightDirective,
    AboutComponent,
    UsersComponent,
    //RepositoriesComponent,
    NotFoundComponent,
    GitSearchComponent,
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
