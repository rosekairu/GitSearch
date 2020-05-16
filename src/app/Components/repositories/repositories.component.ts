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
  constructor(public repoService: ProfileService) {}
  repoSearch(searchUser) {
    this.repoService.searchUserRepo(searchUser).then(
      (results) => {
        this.repo = this.repoService.userRepo;
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
