import {Injectable} from '@angular/core';
import {MessageService} from "./message.service";
import {Observable} from "rxjs/Observable";
import {ChannelInfo} from "./../../models/channelInfo";
import {ChannelData} from "./../../models/channelData";
import {of} from "rxjs/observable/of";
import {CHANNELSINFO} from "./../../mock/mock-channels";
import {LoggerService} from "./logger/logger.service";
import {CHANNELData} from "../../mock/mock-channel-data";
import {VideoInfo} from "../../models/videoInfo";
import {VIDEOSINFO} from "../../mock/mock-video-info";
import {VideoData} from "../../models/videoData";
import {VIDEODataFull} from "../../mock/mock-video-data-full";

@Injectable()
export class VideoService {
  constructor(private messageService: MessageService, private LOGGER: LoggerService) {
  }

  getAllVideosInfo(): Observable<VideoInfo[]> {
    this.messageService.add('ChannelInfo: fetched all videosInfo');
    return of(VIDEOSINFO);
  }

  getVideoInfo(id: String): Observable<VideoInfo> {
    this.LOGGER.info("VideoService : fetched videoInfo id=${id}");
    this.messageService.add(`VideoService: fetched videoInfo id=${id}`);
    return of(VIDEOSINFO.find(videoInfo => videoInfo.id === id));
  }

  getVideoData(id: String): Observable<VideoData> {
    this.LOGGER.info("VideoService : fetched videoData id=${id}");
    this.messageService.add(`VideoService: fetched videoData id=${id}`);
    return of(VIDEODataFull.slice(1,2)[0]);
  }
}
