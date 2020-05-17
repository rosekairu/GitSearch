import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Repo } from '../repo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  userProfile: User[] = [];
  userRepository: Repo[] = [];

  url = 'https://api.github.com/users/';
  apiKey = 'environment.apiKey';

  constructor(private http: HttpClient) {}
  userSearch(userName: string) {
    interface data {
      name: string;
      login: string;
      avatar_url: string;
      public_repos: number;
      followers: number;
      following: number;
      created_at: Date;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<data>(
          `${environment.Url}${userName}?client_avatar=${environment.apiKey}`
        )
        .toPromise()
        .then(
          (result) => {
            console.log(result);
            this.userProfile.push(result);
            resolve();
          },
          (error) => {
            reject();
          }
        );
    });
    return promise;
  }
  myRepo(userName: string) {
    interface repoData {
      name: string;
      html_url: string;
      description: string;
      language: string;
      created_at: Date;
    }
    let promise = new Promise((resolve, reject) => {
      this.userRepository = [];
      this.http
        .get<repoData>(this.url + userName + '/repos?' + this.apiKey)
        .toPromise()
        .then(
          (result) => {
            this.userRepository.push(result);
            resolve();
          },
          (error) => {
            reject();
          }
        );
    });
    return promise;
  }
}
