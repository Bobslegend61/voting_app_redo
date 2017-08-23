import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  inputs: ["singleTopic"]
})
export class BarChartComponent implements OnInit {
  public singleTopic: any;

  chartOptions = {
    responsive: true
  };
  chartData: any[] = [];

  chartLabels: String[] = [];

  constructor() { }

  ngOnInit() {
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
