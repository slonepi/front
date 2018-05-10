import { Component, Input, OnInit } from '@angular/core';
import {ChannelInfo} from "../../models/channelInfo";
import {VideoInfo} from "../../models/videoInfo";

@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.scss']
})
export class VideoInfoComponent implements OnInit {

  @Input() videoInfo: VideoInfo;
  constructor() { }

  ngOnInit() {
  }

}
