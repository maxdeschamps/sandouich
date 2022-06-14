import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexAnnotations,
  ApexDataLabels,
  ApexFill,
  ApexForecastDataPoints,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexNoData,
  ApexPlotOptions,
  ApexResponsive,
  ApexStates,
  ApexStroke,
  ApexTheme,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  annotations: ApexAnnotations;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  grid: ApexGrid;
  legend: ApexLegend;
  markers: ApexMarkers;
  noData: ApexNoData;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive;
  series: ApexAxisChartSeries;
  states: ApexStates;
  stroke: ApexStroke;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
};

@Component({
  selector: 'sand-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @ViewChild("chart", { static: false }) chart: ChartComponent;
  @Input() chartOptions: Partial<ChartOptions> | any = {
    annotations: null,
    chart: {
      height: 350,
      type: "line"
    },
    colors: null,
    dataLabels: null,
    fill: null,
    grid: null,
    legend: null,
    markers: null,
    noData: null,
    plotOptions: null,
    responsive: null,
    series: [
      {
        name: "Nom des données",
        data: [10, 20, 30, 20, 40, 10, 50, 50, 90]
      }
    ],
    states: null,
    stroke: null,
    subtitle: null,
    theme: null,
    title: {
      text: "Statistiques par défaut"
    },
    tooltip: null,
    xaxis: {
      categories: ["Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep"]
    },
    yaxis: null
  };

  constructor() {
  }

  ngOnInit(): void {
  }
}
