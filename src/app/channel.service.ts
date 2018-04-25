import { Injectable } from '@angular/core';
import {MessageService} from "./message.service";
import {Observable} from "rxjs/Observable";
import {Channel} from "./channel";
import {of} from "rxjs/observable/of";
import {CHANNELS} from "./mock/mock-channels";

@Injectable()
export class ChannelService {

  constructor(private messageService: MessageService) { }

  getChannels(): Observable<Channel[]> {
    this.messageService.add('Channel: fetched heroes');
    return of(CHANNELS);
  }

  getChannel(id: String): Observable<Channel> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`ChannelService: fetched channelInfo id=${id}`);
    return of(CHANNELS.find(channel => channel.id === id));
  }

}
