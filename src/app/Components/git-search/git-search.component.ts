import { Component, OnInit } from '@angular/core';
import { Repo } from '../../repo';
import { User } from '../../user';
import { ProfileService } from '../../Services/profile.service';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css'],
})
export class GitSearchComponent implements OnInit {
  gitUsers: User;
  repositories: Repo[] = [];

  constructor(public profileService: ProfileService) {}

  ngOnInit() {
    this.searchGit('rosekairu');
    this.repoSearch('rosekairu');
  }

  //searching for users
  searchGit(searchSome) {
    this.profileService.searchGit(searchSome).then(
      (success) => {
        this.gitUsers = this.profileService.user;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //getting repositories.
  repoSearch(searchSome) {
    this.profileService.getRepos(searchSome).then(
      (success) => {
        this.repositories = this.profileService.repositories;
        console.log(this.repositories);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
