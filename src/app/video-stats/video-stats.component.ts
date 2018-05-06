import {Component} from '@angular/core';
import {VideoData} from "../models/videoData";
import {VIDEODataFull} from "../mock/mock-video-data-full";

@Component({
  selector: 'video-stats',
  templateUrl: './video-stats.component.html'
})
export class VideoStatsComponent {

  videoData: VideoData[] = VIDEODataFull;
  xaxis: Date[] = this.videoData.map((d) => new Date(d.savedOn));
  viewCount: Number[] = this.videoData.map((d) => d.viewCount);
  likeCount: Number[] = this.videoData.map((d) => d.likeCount);
  dislikeCount: Number[] = this.videoData.map((d) => d.dislikeCount);
  commentCount: Number[] = this.videoData.map((d) => d.commentCount);

  // lineChart
  public lineChartData: Array<any> = [
    // {data: [65, 59, 80, 81, 56, 55, 40], label: 'Subscribers'}
    {data: this.viewCount, label: 'Views'},
    {data: this.likeCount, label: 'Likes', hidden:true},
    {data: this.dislikeCount, label: 'Dislikes', hidden:true},
    {data: this.commentCount, label: 'Comments', hidden:true},
  ];

  // public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartLabels: Array<any> = this.xaxis;
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      viewCount: [
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
