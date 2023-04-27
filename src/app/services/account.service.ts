import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  SignUp(signUpModel: any): Observable<any> {
    return this.httpClient.post(environment.apiKey + environment.apiControllers.signup, signUpModel);
  }

  Login(loginModel: any): Observable<any> {
    return this.httpClient.post(environment.apiKey + environment.apiControllers.login, loginModel);
  }

}
