import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUserDetails(userName: string) {
    this.http.get(`https://api.github.com/users/${userName}`);
  }

  getRepos(repoUrl: string) {
    this.http.get(repoUrl);
  }
}
