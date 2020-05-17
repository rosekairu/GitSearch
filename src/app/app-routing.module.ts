import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../app/Components/users/users.component';
//import { RepositoriesComponent } from '../app/Components/repositories/repositories.component';
import { NotFoundComponent } from '../app/Components/not-found/not-found.component';
import { SearchFormComponent } from '../app/Components/search-form/search-form.component';
import { AboutComponent } from '../app/Components/about/about.component';
import { GitSearchComponent } from './Components/git-search/git-search.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'search', component: SearchFormComponent },
  { path: 'user-profile', component: UsersComponent },
  //{ path: 'user-repo', component: RepositoriesComponent },
  { path: 'git-search', component: GitSearchComponent },
  { path: '', redirectTo: 'user-profile', pathMatch: 'full' },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
