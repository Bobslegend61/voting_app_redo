import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { ModelService } from "../../services/model.service";

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
  public signUpForm: FormGroup;

  constructor(private model: ModelService, private _formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
    this.signUpForm =  this._formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    })
  }

  public login(value){
    this.loginSpin = true;
    console.log(value);
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
      })
    }else{
      this.errorMessage = "Password do not match";
      this.signUpSpin = false;
      return false;      
    }
  }

}
