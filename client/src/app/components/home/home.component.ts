import { Component, OnInit } from '@angular/core';

// import service
import { ModelService } from "../../services/model.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private model: ModelService) { }

  ngOnInit() {
    this.model.getAllTopics().subscribe(data => {
      console.log(data);
    }, err => {
      console.log("An error occured: Falled to connect to database");
    })
  }

}