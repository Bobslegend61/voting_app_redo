import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

// import service
import { ModelService } from "../../services/model.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public initialLoadingError: string = null;
  public allTopics: any[];

  constructor(private model: ModelService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.model.getAllTopics().subscribe(data => {
      if(data.success) {
        this.allTopics = data;
      }else{
        this.initialLoadingError = data.message
      }
      
    }, err => {
      this.initialLoadingError = "An error occured: Falled to connect to database. Please check your connection and try again. "+err;
    })
  }

    // public goSingle(username, topic) {
    //   this.router.navigate(["/view/"+username], {queryParams: {topic: topic}});
    //   return false;
    // }
}
