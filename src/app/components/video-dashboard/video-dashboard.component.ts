import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {VideoInfo} from "../../models/videoInfo";
import {VideoData} from "../../models/videoData";
import {VideoService} from "../../core/services/video.service";

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {

  @Input() videoInfo : VideoInfo;
  @Input() videoData : VideoData;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private location: Location) { }


  ngOnInit() {
    this.getVideoInfo();
    this.getVideoData();
  }

  getVideoInfo(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.videoService.getVideoInfo(id)
      .subscribe(videoInfo => this.videoInfo = videoInfo);
  }

  getVideoData(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.videoService.getVideoData(id)
      .subscribe(videoData => this.videoData = videoData);
  }
}
