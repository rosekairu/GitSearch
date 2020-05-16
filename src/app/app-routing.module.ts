import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../app/Components/users/users.component';
import { RepositoriesComponent } from '../app/Components/repositories/repositories.component';
import { NotFoundComponent } from '../app/Components/not-found/not-found.component';
import { AboutComponent } from '../app/Components/about/about.component';
//import { from } from 'rxjs';
//import { from } from 'rxjs';
//import { User } from './user';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'user-search', component: UsersComponent },
  { path: 'repo-search', component: RepositoriesComponent },
  { path: '', redirectTo: 'user-search', pathMatch: 'full' },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
