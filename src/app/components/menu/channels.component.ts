import { Component, OnInit } from '@angular/core';
import {ChannelService} from "../../channel.service";
import {ChannelInfo} from "../../models/channelInfo";
import {LoggerService} from "../../core/services/logger/logger.service";

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  channels : ChannelInfo[];
  constructor(private channelService : ChannelService, private LOGGER: LoggerService) { }

  ngOnInit() {
    this.getChannels();
  }

  getChannels(): void {
    this.channelService.getChannels().subscribe(channels => this.channels = channels)
  }

}
