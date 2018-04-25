import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChannelDetailComponent} from "./channel-detail/channel-detail.component";
import {LineChartDemoComponent} from "./line-chart-demo/line-chart-demo.component";
import {ChannelsComponent} from "./channels/channels.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'channel/:id', component: ChannelDetailComponent },
  { path: 'channels', component: ChannelsComponent },
  { path: 'chart', component: LineChartDemoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
