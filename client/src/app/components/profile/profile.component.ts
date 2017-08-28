import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../services/auth.service";
import { ModelService } from "../../services/model.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public initialLoadingError: string = null;
  public username: String = this.auth.getUsername();
  public profile: any;

  public disable: boolean = false;
  public deleteError: string = null;

  constructor(private auth: AuthService, private model: ModelService) { }

  ngOnInit() {
   this.model.getProfile(this.username).subscribe(data => {
     if(data.success){
      this.profile = data.data.topic
     }else{
      this.initialLoadingError = data.message;
     }    
   }, err => {
    this.initialLoadingError = "An error occured: Falled to connect to database. Please check your connection and try again.";
   })
  }

  public deletePoll(value) {
    this.disable = true;
    let data:any = {
      username: this.username,
      pollName: value
    }
    
    this.model.deletePoll(data).subscribe(data => {
      this.disable = false;
      if(data.success){
        this.profile = data.data.topic
      }else{
        this.deleteError = data.message;
      }
      
    }, err => {
      this.disable = false;
      this.deleteError = "Error reach database";
    })
  }
}
