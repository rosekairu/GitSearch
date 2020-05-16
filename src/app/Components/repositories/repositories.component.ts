import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../Services/profile.service';
import { Repo } from '../../repo';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  repo: Repo;

  constructor(public profileService: ProfileService) {}
  repoSearch(searchUser) {
    this.profileService.getRepo(searchUser).then(
      (results) => {
        this.repo = this.profileService.gitRepos;
        console.log(this.repo);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.repoSearch('rosekairu');
  }
}
