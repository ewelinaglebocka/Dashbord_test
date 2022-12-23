import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [32,14,46,23,38,56], label: 'Sentiment Analysis'},
  { data: [12,18,26,13,28,26], label: 'Image Recognition'},
  { data: [52,34,49,53,68,62], label: 'Forcecasting'}
];

const LINE_CHART_LABELS : string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }
  
  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartsLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };
  lineChartLegend = true;
  lineChartType: ChartType = 'line';
  ngOnInit(): void {
  }

}
