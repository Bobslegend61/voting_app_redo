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

  // create poll
  public createPoll(data: createPoll) {
    return this.http.post(`${this.host}createpoll`, data).map(res => res.json());
  }

  // signup
  public signup(data: userSignupData) {
    return this.http.post(`${this.host}signup`, data).map(res => res.json())
  }

  // login
  public logIn(data: userLoginData) {
    return this.http.post(`${this.host}login`, data).map(res => res.json());
  }

  // single topic
  public getSingleTopic(username: String, topic: String) {
    let data: singleDataTopic = {
      username: username,
      topic: topic
    }

    return this.http.post(`${this.host}getsingletopic`, data).map(res => res.json());
  }

  // comment
  public onComment(data: comment) {
    return this.http.post(`${this.host}comment`, data).map(res => res.json());
  }

  // add
  public onAdd(data: add) {
    return this.http.post(`${this.host}add`, data).map(res => res.json());
  }

  // vote
  public onVote(data: vote) {
    return this.http.post(`${this.host}vote`, data).map(res => res.json());
  }
}

interface userLoginData {
  username: String,
  password: String
}

interface userSignupData {
  username: String,
  password: String,
  confirmPassword: String
}

interface singleDataTopic {
  username: String,
  topic: String
}

interface createPoll {
  title: String,
  info: String,
  options: String,
  username: String
}

interface comment {
  username: String,
  comment: String,
  name: String,
  topic: String
}

interface add {
  username: String,
  options: String,
  topic: String
}

interface vote {
  username: String,
  voted: String,
  topic: String
}