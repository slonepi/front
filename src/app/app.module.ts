import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChannelDetailComponent } from './channel-detail/channel-detail.component';
import { ChannelsComponent } from './components/menu/channels.component';
import { MessageService } from './core/services/message.service';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {ChannelService} from "./core/services/channel.service";
import {MessagesComponent} from "./messages/messages.component";
import {ChartsModule} from "ng2-charts";
import { ChannelStatsComponent } from './channel-stats/channel-stats.component';
import { CoreModule } from './core/core.module';
import { ChannelInfoComponent } from './components/channelinfo/channel-info.component';
import { ChannelDashboardComponent } from './components/channel-dashboard/channel-dashboard.component';
import {ChannelDataComponent} from "./components/channel-data/channel-data.component";
import { VideoDataComponent } from './components/video-data/video-data.component';
import { VideoInfoComponent } from './components/video-info/video-info.component';
import { VideoDashboardComponent } from './components/video-dashboard/video-dashboard.component';
import {VideoStatsComponent} from "./components/video-stats/video-stats.component";
import {VideoService} from "./core/services/video.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChannelDetailComponent,
    MessagesComponent,
    ChannelsComponent,
    ChannelStatsComponent,
    VideoStatsComponent,
    ChannelInfoComponent,
    ChannelDashboardComponent,
    ChannelDataComponent,
    VideoDataComponent,
    VideoInfoComponent,
    VideoDashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ChartsModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [MessageService, ChannelService, VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
