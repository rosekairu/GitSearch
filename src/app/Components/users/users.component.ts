import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../Services/profile.service';
import { User } from '../../user';
import { Repo } from '../../repo';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User;
  repo: Repo;

  constructor(
    public userService: ProfileService,
    private repoService: ProfileService
  ) {}

  search(searchUser) {
    this.userService.searchUserName(searchUser).then(
      (success) => {
        this.user = this.userService.userName;
      },
      (error) => {
        console.log(error);
      }
    );
    this.repoService.getRepo(searchUser).then(
      (results) => {
        this.repo = this.repoService.gitRepos;
        console.log(this.repo);
      },
      (error) => {
        console.log(Error);
      }
    );
  }

  ngOnInit() {
    this.search('rosekairu');
  }
}
