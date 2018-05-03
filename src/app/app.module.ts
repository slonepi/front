import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChannelDetailComponent } from './channel-detail/channel-detail.component';
import { ChannelsComponent } from './channels/channels.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import {FormsModule} from "@angular/forms";
import {ChannelService} from "./channel.service";
import {MessagesComponent} from "./messages/messages.component";
import {ChartsModule} from "ng2-charts";
import { ChannelStatsComponent } from './channel-stats/channel-stats.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    ChannelDetailComponent,
    MessagesComponent,
    ChannelsComponent,
    ChannelStatsComponent
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
