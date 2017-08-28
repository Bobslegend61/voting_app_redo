import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../services/auth.service";
import { ModelService } from "../../services/model.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public username: String = this.auth.getUsername();
  public profile: any;

  constructor(private auth: AuthService, private model: ModelService) { }

  ngOnInit() {
   this.model.getProfile(this.username).subscribe(data => {
     if(data.success){
       console.log(data)
      this.profile = data.data.topic
     }else{
      console.log(data.message);
     }    
   }, err => {
     console.log("Error")
   })
  }

  public deletePoll(value) {
    console.log(value);
    let data:any = {
      username: this.username,
      pollName: value
    }
    
    this.model.deletePoll(data).subscribe(data => {
      if(data.success){
        this.profile = data.data.topic
      }else{
        console.log(data.message);
        
      }
      
    }, err => {
      console.log("Error reach database");
    })
  }
}
