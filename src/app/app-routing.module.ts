import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChannelDetailComponent} from "./channel-detail/channel-detail.component";
import {ChannelStatsComponent} from "./channel-stats/channel-stats.component";
import {ChannelsComponent} from "./channels/channels.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'channelInfo/:id', component: ChannelDetailComponent },
  { path: 'channels', component: ChannelsComponent },
  { path: 'chart', component: ChannelStatsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
