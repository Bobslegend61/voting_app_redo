import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ModelService {
  host: String = "http://localhost:3000/";

  constructor(private http: Http) { }
  
  // get all topics
  public getAllTopics() {
    return this.http.get(`${this.host}getalltopics`).map(res => res.json());
  }

  // signup
  public signup(data: any) {
    return this.http.post(`${this.host}signup`, data).map(res => res.json())
  }
}
