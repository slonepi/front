import {Component, Input, OnInit} from '@angular/core';
import {ChannelInfo} from "../models/channelInfo";
import {ChannelService} from "../core/services/channel.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-channel-detail',
  templateUrl: './channel-detail.component.html',
  styleUrls: ['./channel-detail.component.scss']
})
export class ChannelDetailComponent implements OnInit {

  @Input() channelInfo : ChannelInfo;

  constructor(
    private route: ActivatedRoute,
    private channnelService: ChannelService,
    private location: Location) { }

  ngOnInit() {
    this.getChannelDetail();
  }

  getChannelDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.channnelService.getChannelInfo(id)
      .subscribe(channelInfo => this.channelInfo = channelInfo);
  }
}
