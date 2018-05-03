import {Injectable} from '@angular/core';
import {MessageService} from "./message.service";
import {Observable} from "rxjs/Observable";
import {ChannelInfo} from "./models/channelInfo";
import {of} from "rxjs/observable/of";
import {CHANNELS} from "./mock/mock-channels";
import {LoggerService} from "./core/services/logger/logger.service";

@Injectable()
export class ChannelService {

  constructor(private messageService: MessageService, private LOGGER: LoggerService) {
  }

  getChannels(): Observable<ChannelInfo[]> {
    this.messageService.add('ChannelInfo: fetched heroes');
    return of(CHANNELS);
  }

  getChannel(id: String): Observable<ChannelInfo> {
    // TODO: send the message _after_ fetching the hero
    this.LOGGER.info("ChannelService : fetched channelInfo id=${id}");
    this.messageService.add(`ChannelService: fetched channelInfo id=${id}`);
    return of(CHANNELS.find(channel => channel.id === id));
  }

}
