import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  inputs: ["singleTopic"]
})
export class PieChartComponent implements OnInit {
  public singleTopic: any;

  chartOptions = {
    responsive: true
  };
  chartData: any[] = [];

  chartLabels: String[] = [];
  constructor() { }

  ngOnInit() {
    console.log("PIE");
    
    let trying = {
      data: [], label: this.singleTopic.title
    };
    this.singleTopic.options.forEach(element => {
      this.chartLabels.push(element.item);
      trying.data.push(element.count);
    });

    this.chartData.push(trying);
  }

}
