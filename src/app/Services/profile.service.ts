import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { from } from 'rxjs';
import { User } from '../user';
import { Repo } from '../repo';
//import { resolve } from 'dns';
//import { rejects } from 'assert';
import { environment } from 'src/environments/environment';
//import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userName: User;
  userRepo: Repo;

  constructor(private http: HttpClient) {
    this.userName = new User('', '', '', '', 0, 0, 0, new Date());
    this.userRepo = new Repo('', '', '', 0, 0, 0, new Date());
  }

  searchUserName(searchUser: string) {
    interface ApiResponse {
      login: string;
      avatar_url: string;
      url: string;
      html_url: string;
      public_repos: number;
      followers: number;
      following: number;
      created_at: Date;
    }

    return new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          'https://api.github.com/users/' +
            searchUser +
            '?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (result) => {
            this.userName = result;
            console.log(this.userName);
            resolve();
          },
          (error) => {
            console.log(error);
            reject();
          }
        );
    });
  }

  searchUserRepo(searchUser: string) {
    interface Repo {
      name: string;
      html_url: string;
      description: string;
      stars: number;
      forks: number;
      languages: number;
      created_at: Date;
    }

    return new Promise((resolve, reject) => {
      this.http
        .get<Repo>(
          'https://api.github.com/users/' +
            searchUser +
            '/repo?order=created&sort=asc?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (results) => {
            this.userRepo = results;
            console.log(this.userRepo);
            resolve();
          },
          (error) => {
            console.log(error);
            reject();
          }
        );
    });
  }
}
