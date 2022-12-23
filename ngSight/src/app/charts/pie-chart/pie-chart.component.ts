import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  pieChartData: ChartData<'pie', number[]> = {
    datasets: [ {
      data: [ 300, 450, 120 ]
    } ]
  };
  pieChartLabels: string[] = ['XYZ Logistics', 'Main St Bakery', 'Acm Hosting'];
  pieChartType: ChartType = 'pie';

  ngOnInit(): void {
  }

}
