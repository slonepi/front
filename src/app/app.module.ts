import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChannelDetailComponent } from './channel-detail/channel-detail.component';
import { ChannelsComponent } from './components/menu/channels.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {ChannelService} from "./channel.service";
import {MessagesComponent} from "./messages/messages.component";
import {ChartsModule} from "ng2-charts";
import { ChannelStatsComponent } from './channel-stats/channel-stats.component';
import { CoreModule } from './core/core.module';
import { VideoStatsComponent } from './video-stats/video-stats.component';
import { ChannelInfoComponent } from './components/channelinfo/channel-info.component';
import { ChannelDashboardComponent } from './components/channel-dashboard/channel-dashboard.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ChartsModule,
    CoreModule
  ],
  providers: [MessageService, ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
