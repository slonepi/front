import {Component, Input, OnInit} from '@angular/core';
import {ChannelInfo} from "../../models/channelInfo";
import {ChannelData} from "../../models/channelData";
import {ChannelService} from "../../core/services/channel.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {VideoInfo} from "../../models/videoInfo";

@Component({
  selector: 'app-channel-dashboard',
  templateUrl: './channel-dashboard.component.html',
  styleUrls: ['./channel-dashboard.component.scss']
})
export class ChannelDashboardComponent implements OnInit {

  @Input() channelInfo : ChannelInfo;
  @Input() channelData : ChannelData;
  @Input() videosInfo : VideoInfo[];

  constructor(
    private route: ActivatedRoute,
    private channnelService: ChannelService,
    private location: Location) { }

  ngOnInit() {
    this.getChannelInfo();
    this.getChannelData();
    this.getVideosInfo();
  }

  getChannelInfo(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.channnelService.getChannelInfo(id)
      .subscribe(channelInfo => this.channelInfo = channelInfo);
  }

  getChannelData(): void {
    const channelId = this.route.snapshot.paramMap.get('id');
    this.channnelService.getChannelData(channelId)
      .subscribe(channelData => this.channelData = channelData);
  }

  getVideosInfo(): void {
    const channelId = this.route.snapshot.paramMap.get('id');
    this.channnelService.getRelatedVideos(channelId)
      .subscribe(videosInfo => this.videosInfo = videosInfo);
  }
}
