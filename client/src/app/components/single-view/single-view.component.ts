import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";


import { ModelService } from "../../services/model.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {
  public singleTopic: any;
  
  public showChart: boolean = true;

  // spinners and alerts
  public voteSpinner: boolean = false;
  public voteErrorMessage: String;

  public addCommentSpin: boolean = false;
  public addCommentErrorMessage: String;

  public addOptionsSpin: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private model: ModelService, private auth: AuthService) { }

  ngOnInit() {
    this.model.getSingleTopic(this.route.snapshot.params["username"],this.route.snapshot.queryParams["topic"]).subscribe(data => {
      this.singleTopic = data.data;
    });    
  }

  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

    // if(this.singleTopic != this.oldSingleTopic) {
    //   this.chartData = [];
    //   this.chartLabels = [];
  
    //   let trying = {
    //     data: [], label: this.singleTopic.title
    //   };
    //   this.singleTopic.options.forEach(element => {
    //     this.chartLabels.push(element.item);
    //     trying.data.push(element.count);
    //   });
  
    //   this.chartData.push(trying);
    //   this.chatType = "pie";

    //   this.oldSingleTopic == this.singleTopic;
    // }
  
  }
    
  public toggleChart(){
    this.showChart = !this.showChart;
  }

  public submitComment(e,value) {
    this.addCommentSpin = true;
    this.addCommentErrorMessage = null;
    let data = {
      username: this.route.snapshot.params["username"],
      name: value.name,
      comment: value.comment,
      topic: this.route.snapshot.queryParams["topic"]
    }  
    this.model.onComment(data).subscribe(data => {
      this.addCommentSpin = false;
      if(data.success) {
        this.singleTopic = data.data
      }else{
        this.addCommentErrorMessage = data.message;
      }
      e.reset();
    }, err => {
      this.addCommentSpin = false;
      this.addCommentErrorMessage = "Error connecting to database";
    });  
  }

  public addOptions(e,value) {    
    this.addOptionsSpin = true;
    this.voteErrorMessage = null;
    let data = {
      username: this.route.snapshot.params["username"],
      options: value.add,
      topic: this.route.snapshot.queryParams["topic"]
    }  

    this.model.onAdd(data).subscribe(data => {
      this.addOptionsSpin = false;
      if(data.success) {
        this.singleTopic = data.data;
        this.showChart = !this.showChart;
      }else{
        this.voteErrorMessage = data.message;
      }
      e.reset();
    }, err => {
      this.addOptionsSpin = false;
      this.voteErrorMessage = "Error connecting to db";
    }); 

  }

  public vote(item) {
    this.voteSpinner = true;
    this.voteErrorMessage = null;
    let data = {
      username: this.route.snapshot.params["username"],
      voted: item,
      topic: this.route.snapshot.queryParams["topic"]
    }

    if(localStorage.getItem("votes")) {
      let check = JSON.parse(localStorage.getItem("votes")).find((user) => {
        return user.username == this.route.snapshot.params["username"];
      });
      if(check) {
        let voted = check.topic.find((topic) => {
          return topic == data.topic
        });

        if(voted) {
          this.voteSpinner = false;
          return this.voteErrorMessage = "You can't vote twice";
        }
      }
        
    }

    this.model.onVote(data).subscribe(data => {
      this.voteSpinner = false;
      if(data.success) {
        console.log(data);
        
        this.singleTopic = data.data;
        this.showChart = !this.showChart;
        if(localStorage.getItem("votes")){
          let check = JSON.parse(localStorage.getItem("votes")).find((user) => {
            return user.username == this.route.snapshot.params["username"];
          });
          if(check) {
            let votes = JSON.parse(localStorage.getItem("votes"));
            for(let i=0; i < votes.length; i++) {
              if(votes[i].username == this.route.snapshot.params["username"]){
                votes[i].topic.push(data.data.title);
              }
            }

            localStorage.setItem("votes", JSON.stringify(votes));
          }else{
            let votes = JSON.parse(localStorage.getItem("votes"));
            votes.push({username: this.route.snapshot.params["username"], topic: [data.data.title]});
            localStorage.setItem("votes", JSON.stringify(votes));
          }
          
        }else{
          localStorage.setItem("votes", JSON.stringify([{username: this.route.snapshot.params["username"], topic: [data.data.title]}]));
        }
        
      }else{
        this.voteErrorMessage = data.message;
      }
    }, err => {
      this.voteSpinner = false;
      this.voteErrorMessage = "Error connecting to database. Try again";
    });
  }

  public onChartClick(event) {
    console.log(event);
  }

}
