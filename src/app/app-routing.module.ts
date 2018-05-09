import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChannelDetailComponent} from "./channel-detail/channel-detail.component";
import {ChannelStatsComponent} from "./channel-stats/channel-stats.component";
import {VideoStatsComponent} from "./video-stats/video-stats.component";
import {ChannelDashboardComponent} from "./components/channel-dashboard/channel-dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'channel-dashboard/:id', component: ChannelDashboardComponent },
  { path: 'channelInfo/:id', component: ChannelDetailComponent },
  { path: 'videoStats', component: VideoStatsComponent },
  { path: 'chart', component: ChannelStatsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
