import { Component, OnInit } from '@angular/core';

import { ModelService } from "../../services/model.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private model: ModelService) { }

  ngOnInit() {
  }

  public login(value){
  }

  public signup(value){
    this.model.signup(value).subscribe(data => {
      console.log(data);
    })
  }

}
