import {Injectable} from '@angular/core';
import {MessageService} from "./message.service";
import {Observable} from "rxjs/Observable";
import {ChannelInfo} from "./../../models/channelInfo";
import {ChannelData} from "./../../models/channelData";
import {of} from "rxjs/observable/of";
import {CHANNELSINFO} from "./../../mock/mock-channels";
import {LoggerService} from "./logger/logger.service";
import {CHANNELData} from "../../mock/mock-channel-data";

@Injectable()
export class ChannelService {

  constructor(private messageService: MessageService, private LOGGER: LoggerService) {
  }

  getChannels(): Observable<ChannelInfo[]> {
    this.messageService.add('ChannelInfo: fetched heroes');
    return of(CHANNELSINFO);
  }

  getChannelInfo(id: String): Observable<ChannelInfo> {
    // TODO: send the message _after_ fetching the hero
    this.LOGGER.info("ChannelService : fetched channelInfo id=${id}");
    this.messageService.add(`ChannelService: fetched channelInfo id=${id}`);
    return of(CHANNELSINFO.find(channel => channel.id === id));
  }

  getChannelData(channelId: String): Observable<ChannelData> {
    // TODO: send the message _after_ fetching the hero
    this.LOGGER.info("ChannelService : fetched channelData id=${id}");
    this.messageService.add(`ChannelService: fetched channelData id=${channelId}`);
    return of(CHANNELData.slice(1,2)[0]);
  }
}
