import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthenticationService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.endpointUrl + '/authenticate';
  }

  authenticate(username: string, password: string) {
    return this.http.post(this.url, {
      username: username,
      password: password
    }).map((response) => {
      this.storeAccessToken(response);
    });
  }

  storeAccessToken(token) {
    localStorage.setItem('ca-token', JSON.stringify(token));
  }

}
