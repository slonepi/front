import { Component, OnInit } from '@angular/core';
import {ChannelService} from "../channel.service";
import {Channel} from "../channel";

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  channels : Channel[];
  constructor(private channelService : ChannelService) { }

  ngOnInit() {
    this.getChannels();
  }

  getChannels(): void {
    this.channelService.getChannels().subscribe(channels => this.channels = channels)
  }

}
