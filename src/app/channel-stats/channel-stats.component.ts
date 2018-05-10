import {Component} from '@angular/core';
import {CHANNELData} from "../mock/mock-channel-data";
import {ChannelData} from "../models/channelData";
import {DatePipe} from '@angular/common';
import {CHANNELDataFull} from "../mock/mock-channel-data-full";

@Component({
  selector: 'app-channel-stats',
  templateUrl: './channel-stats.component.html'
})
export class ChannelStatsComponent {

  channelData: ChannelData[] = CHANNELData;
  xaxis: Date[] = this.channelData.map((d) => new Date(d.savedOn));
  yaxis: Number[] = this.channelData.map((d) => d.subscriberCount);
  y2axis: Number[] = this.channelData.map((d) => d.videoCount);

  // lineChart
  public lineChartData: Array<any> = [
    // {data: [65, 59, 80, 81, 56, 55, 40], label: 'Subscribers'}
    {data: this.yaxis, label: 'Subscribers'},
    {data: this.y2axis, label: 'VideoCount', hidden:true}
  ];

  // public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartLabels: Array<any> = this.xaxis;
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }
      ],
      xAxes: [
        {
          type: 'time',
          time: {
            displayFormats: {
              // // minute: 'MMM DD',
              hour: 'DD/MM HH[h]',
              // day: 'MMM DD',
              // month: 'MMM DD',
              // year: 'MMM DD',
            }
          }
        }
      ]
    }
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
