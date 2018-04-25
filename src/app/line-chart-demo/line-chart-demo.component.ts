import { Component } from '@angular/core';
import {CHANNELData} from "../mock-channel-data";
import {ChannelData} from "../channelData";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'line-chart-demo',
  templateUrl: './line-chart-demo.component.html'
})
export class LineChartDemoComponent {

  channelData : ChannelData[]= CHANNELData;
  xaxis : String[] =  this.channelData.map((d) => d.savedOn);
  yaxis : Number[] =  this.channelData.map((d) => d.subscriberCount);

  // lineChart
  public lineChartData:Array<any> = [
    // {data: [65, 59, 80, 81, 56, 55, 40], label: 'Subscribers'}
    {data: this.yaxis, label: 'Subscribers'}
  ];

  // public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartLabels:Array<any> = this.xaxis;
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
