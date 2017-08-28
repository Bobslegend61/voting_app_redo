import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { JwtHelper } from "angular2-jwt";

import { ModelService } from "../../services/model.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  public signUpSpin: boolean = false;
  public loginSpin: boolean = false;
  public errorMessage: String;
  public successMessage: String;
  public loginErrorMessage: String;
  public username: String = this.auth.getUsername();
 

  public signUpForm: FormGroup;

  constructor(private auth: AuthService, private model: ModelService, private _formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
    this.signUpForm =  this._formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    })
  }

  public logout(){
    this.username = null;
    localStorage.removeItem("token");
    this.router.navigate(["/home"]);
    return false;
  }

  public login(value){
    this.loginSpin = true;
    this.model.logIn(value).subscribe(data => {
      if(data.success){
        this.loginSpin = false;
        this.loginErrorMessage = null;
        localStorage.setItem("token", data.data.token);

        this.username = data.data.username;
      }else{
        this.loginSpin = false;
        return this.loginErrorMessage = data.message; 
      }
    }, err => {
      this.loginSpin = false;
      return this.loginErrorMessage = "Error reaching database"; 
    });
  }

  resetForm(){
    this.errorMessage = null;
    this.successMessage = null;
    this.signUpForm.reset();
  }

  public signup(){
    this.errorMessage = null;
    this.successMessage = null;
    this.signUpSpin = true;
    let userDetails = this.signUpForm.value;
    if(userDetails.password === userDetails.confirmPassword){
      this.model.signup(userDetails).subscribe(data => {
        if(data.success) {
          this.successMessage = "You have been successfully registered."
          this.signUpSpin = false;
        }else{
          this.signUpSpin = false;
          return this.errorMessage = data.message;
        }
      }, err => {
        this.signUpSpin = false;
        return this.errorMessage = "Error reaching server";
      })
    }else{
      this.errorMessage = "Password do not match";
      this.signUpSpin = false;
      return false;      
    }
  }

}
