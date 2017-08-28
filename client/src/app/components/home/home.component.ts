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
  public allTopics: any[];

  constructor(private model: ModelService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.model.getAllTopics().subscribe(data => {
      console.log(data);
      this.allTopics = data;
    }, err => {
      console.log("An error occured: Falled to connect to database");
    })
  }

    // public goSingle(username, topic) {
    //   this.router.navigate(["/view/"+username], {queryParams: {topic: topic}});
    //   return false;
    // }
}
