import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Repo } from '../repo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userName: User;
  gitRepos: Repo;

  constructor(private http: HttpClient) {
    this.userName = new User('', '', '', 0, 0, 0, new Date());
    this.gitRepos = new Repo('', '', '', '', new Date());
  }

  searchUserName(searchUser: string) {
    interface ApiResponse {
      name: string;
      login: string;
      avatar_url: string;
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

  getRepo(searchUser) {
    interface Repo {
      name: string;
      html_url: string;
      description: string;
      language: string;
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
            this.gitRepos = results;
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
