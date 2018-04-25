import { Injectable } from '@angular/core';
import {MessageService} from "./message.service";
import {Observable} from "rxjs/Observable";
import {Channel} from "./channel";
import {of} from "rxjs/observable/of";
import {CHANNELS} from "./mock-channels";

@Injectable()
export class ChannelService {

  constructor(private messageService: MessageService) { }

  getChannels(): Observable<Channel[]> {
    this.messageService.add('Channel: fetched heroes');
    return of(CHANNELS);
  }

  getHero(id: String): Observable<Channel> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(CHANNELS.find(channel => channel.id === id));
  }

}
