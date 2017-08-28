import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { tokenNotExpired, JwtHelper } from "angular2-jwt";

@Injectable()
export class AuthService {
  public jwtHelper: JwtHelper = new JwtHelper();

  constructor(private router: Router) { }

  loggedIn() {
    return tokenNotExpired();
  }

  getUsername() {
    return localStorage.getItem("token") ? this.jwtHelper.decodeToken(localStorage.getItem("token")).username : null;
  }

  public goSingle(username, topic) {
    this.router.navigate(["/view/"+username], {queryParams: {topic: topic}});
    return false;
  }
}
