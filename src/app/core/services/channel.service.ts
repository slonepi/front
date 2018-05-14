import {Injectable} from '@angular/core';
import {MessageService} from "./message.service";
import {Observable} from "rxjs/Observable";
import {ChannelInfo} from "./../../models/channelInfo";
import {ChannelData} from "./../../models/channelData";
import {of} from "rxjs/observable/of";
import {CHANNELSINFO} from "./../../mock/mock-channels";
import {LoggerService} from "./logger/logger.service";
import {CHANNELData} from "../../mock/mock-channel-data";
import { HttpClient, HttpResponse } from '@angular/common/http';
import {VideoInfo} from "../../models/videoInfo";

@Injectable()
export class ChannelService {

  URL : String = "http://localhost:8090/";

  constructor(private messageService: MessageService, private LOGGER: LoggerService, private _http: HttpClient) {
  }

  getAllChannelsInfo(): Observable<ChannelInfo[]> {
    this.messageService.add('ChannelInfo: fetched all channelInfo');
    return of(CHANNELSINFO);
  }

  getChannelInfo(id: String): Observable<ChannelInfo> {
    this.LOGGER.info("ChannelService : fetched channelInfo id=${id}");
    this.messageService.add(`ChannelService: fetched channelInfo id=${id}`);
    return this._http.get<ChannelInfo>(`${this.URL}/channelInfo/?id=${id}`);
  }

  getChannelData(channelId: String): Observable<ChannelData> {
    this.LOGGER.info("ChannelService : fetched channelData id=${channelId}");
    this.messageService.add(`ChannelService: fetched channelData id=${channelId}`);
    return this._http.get<ChannelData>(`${this.URL}/channelData/?id=${channelId}`)
  }

  getRelatedVideos(channelId: String): Observable<VideoInfo[]> {
    this.LOGGER.info("ChannelService : fetched channelData id=${channelId}");
    this.messageService.add(`ChannelService: fetched channelData id=${channelId}`);
    return this._http.get<VideoInfo[]>(`${this.URL}/channelInfo/videos?id=${channelId}`)
  }
}
