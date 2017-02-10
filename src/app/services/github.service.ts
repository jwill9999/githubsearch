import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {GitServiceKeys} from '../.serviceconfig';

@Injectable()
export class GithubService {
  private username: string;
  private client_id: string;
  private client_secret: string;
  
 

  constructor(private _http: Http, private keys: GitServiceKeys ) {
    console.log('Github Service Ready...');
    this.username = keys.username;
    this.client_id = keys.client_id;
    this.client_secret = keys.client_secret;
    
  }

  getUser() {
    return this._http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  getRepos() {
    return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }

}
