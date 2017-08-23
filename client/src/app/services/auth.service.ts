import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from "angular2-jwt";

@Injectable()
export class AuthService {
  public jwtHelper: JwtHelper = new JwtHelper();

  constructor() { }

  loggedIn() {
    return tokenNotExpired();
  }

  getUsername() {
    return localStorage.getItem("token") ? this.jwtHelper.decodeToken(localStorage.getItem("token")).username : null;
  }
}
