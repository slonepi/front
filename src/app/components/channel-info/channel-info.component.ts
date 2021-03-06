import {Component, Input, OnInit} from '@angular/core';
import {ChannelInfo} from "../../models/channelInfo";
import {ChannelService} from "../../core/services/channel.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-channel-info',
  templateUrl: './channel-info.component.html',
  styleUrls: ['./channel-info.component.scss']
})
export class ChannelInfoComponent implements OnInit {

  @Input() channelInfo : ChannelInfo;

  constructor(
    private route: ActivatedRoute,
    private channnelService: ChannelService,
    private location: Location) { }

  ngOnInit() {
    // this.getChannelInfo();
  }
  //
  // getChannelInfo(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   console.log("channelInfo " + id)
  //   this.channnelService.getChannelInfo(id)
  //     .subscribe(channelInfo => this.channelInfo = channelInfo);
  // }
}
