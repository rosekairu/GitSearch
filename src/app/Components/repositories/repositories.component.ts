/*import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../Services/profile.service';
import { User } from '../../user';
import { Repo } from '../../repo';

import { Router } from '@angular/router';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
<<<<<<< HEAD
  goToUrl(id) {
    this.router.navigate(['/users', id]);
  }

  repositories: Repo[];
  userRepositories: Repo[];
  users: User[];
  show: boolean = false;

  startNum: number;
  lastNum: number;
  ctr: number;

  constructor(
    public repoHttpService: ProfileService,
    public userHttpService: ProfileService,
    private router: Router
  ) {}

  ngOnInit() {
    this.search('');
  }

  search(searchTerm) {
    this.userHttpService.searchUser(searchTerm).then(
      () => {
        this.users = this.userHttpService.users;
        let noOfUsers = this.users.length;
        console.log(noOfUsers);
      },
      (error) => {
        console.log(error);
      }
    );
    this.repoHttpService.searchRepo(searchTerm).then(
      () => {
        this.repositories = this.repoHttpService.repositories;
        let noOfReposFound = this.repositories.length;
        console.log(noOfReposFound);
=======
  repo: Repo;

  constructor(public profileService: ProfileService) {}
  repoSearch(searchUser) {
    this.profileService.getRepo(searchUser).then(
      (results) => {
        this.repo = this.profileService.gitRepos;
        console.log(this.repo);
>>>>>>> 31cdabe385e12cb03cec8ee6d4302f036a8aa664
      },
      (error) => {
        console.log(error);
      }
    );
  }

  hPoint() {
    this.startNum = 0;
    this.lastNum = 0;

    for (this.ctr = 0; this.ctr < this.repositories.length; this.ctr++) {
      this.lastNum = this.repositories[this.ctr].forks;
      if (this.lastNum > this.startNum) {
        this.startNum = this.lastNum;
      }
    }

    return this.startNum;
  }
}*/
