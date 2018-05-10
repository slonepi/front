import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChannelDetailComponent} from "./channel-detail/channel-detail.component";
import {ChannelStatsComponent} from "./channel-stats/channel-stats.component";
import {ChannelDashboardComponent} from "./components/channel-dashboard/channel-dashboard.component";
import {ChannelsComponent} from "./components/menu/channels.component";
import {VideoDashboardComponent} from "./components/video-dashboard/video-dashboard.component";
import {VideoStatsComponent} from "./components/video-stats/video-stats.component";

const routes: Routes = [
  { path: '', redirectTo: '/channel-dashboard/UC_yP2DpIgs5Y1uWC0T03Chw', pathMatch: 'full' },
  { path: 'channel-dashboard/:id', component: ChannelDashboardComponent },
  { path: 'video-dashboard/:id', component: VideoDashboardComponent },
  { path: 'channelInfo/:id', component: ChannelDetailComponent },
  { path: 'videoStats', component: VideoStatsComponent },
  { path: 'chart', component: ChannelStatsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
