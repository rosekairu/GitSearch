import { Component, OnInit } from '@angular/core';
import { Repo } from '../../repo';
import { User } from '../../user';
import { HttpServiceService } from '../../Services/http-service.service';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css'],
})
export class GitSearchComponent implements OnInit {
  theUsers: User[];
  theRepositories: Repo[];

  constructor(private http: HttpServiceService) {}

  ngOnInit() {
    this.myName('RoseKairu');
  }
  myName(userName) {
    this.http.userSearch(userName).then(
      (success) => {
        this.theUsers = this.http.userProfile;
        console.log(this.theUsers);
      },

      (error) => {
        console.log(error);
      }
    );
    this.http.myRepo(userName).then(
      (success) => {
        this.theRepositories = this.http.userRepository;
        console.log(this.theRepositories);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
