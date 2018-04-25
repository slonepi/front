import {Component, Input, OnInit} from '@angular/core';
import {Channel} from "../channel";
import {ChannelService} from "../channel.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-channel-detail',
  templateUrl: './channel-detail.component.html',
  styleUrls: ['./channel-detail.component.css']
})
export class ChannelDetailComponent implements OnInit {

  @Input() channel : Channel;

  constructor(
    private route: ActivatedRoute,
    private channnelService: ChannelService,
    private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.channnelService.getChannel(id)
      .subscribe(channelInfo => this.channel = channelInfo);
  }
}
