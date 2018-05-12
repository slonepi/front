import {Injectable} from '@angular/core';
import {MessageService} from "./message.service";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {LoggerService} from "./logger/logger.service";
import {VideoInfo} from "../../models/videoInfo";
import {VideoData} from "../../models/videoData";
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class VideoService {

  URL : String = "http://localhost:8090/";

  constructor(private messageService: MessageService, private LOGGER: LoggerService, private _http: HttpClient) {
  }

  getVideoInfo(id: String): Observable<VideoInfo> {
    this.LOGGER.info("VideoService : fetched videoInfo id=${id}");
    this.messageService.add(`VideoService: fetched videoInfo id=${id}`);
    return this._http.get<VideoInfo>(`${this.URL}/videoInfo/?id=${id}`);
  }

  getVideoData(id: String): Observable<VideoData> {
    this.LOGGER.info("VideoService : fetched videoData id=${id}");
    this.messageService.add(`VideoService: fetched videoData id=${id}`);
    return this._http.get<VideoData>(`${this.URL}/videoData/?id=${id}`)
  }
}
