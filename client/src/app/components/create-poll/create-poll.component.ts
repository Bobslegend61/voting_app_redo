import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";
import { ModelService } from "../../services/model.service";


@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
  public username: String = this.auth.getUsername();
  public pollsForm: FormGroup;
  public errorMessage: String;

  constructor(private _formBuilder: FormBuilder, private auth: AuthService, private model: ModelService, private router: Router) { }

  ngOnInit() {
    this.pollsForm = this._formBuilder.group({
      title: [null, [Validators.required]],
      info: [],
      options: [null, [Validators.required]],
    });
  }

  public submitPoll() {
    this.errorMessage = null;
    let data = {
      username: this.username,
      title: this.pollsForm.value.title,
      options: this.pollsForm.value.options,
      info: this.pollsForm.value.info
    }
    this.model.createPoll(data).subscribe((data) => {
      if(data.success) {
        this.router.navigate(["/home"]);
      }else{
        this.errorMessage = data.message
      }      
    }, err => {
      this.errorMessage = "Error reaching database"
    })
    
  }

}
