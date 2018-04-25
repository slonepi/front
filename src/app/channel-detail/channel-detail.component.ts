import {Component, Input, OnInit} from '@angular/core';
import {Channel} from "../channel";

@Component({
  selector: 'app-channel-detail',
  templateUrl: './channel-detail.component.html',
  styleUrls: ['./channel-detail.component.css']
})
export class ChannelDetailComponent implements OnInit {

  @Input() channel : Channel;

  constructor() { }

  ngOnInit() {
  }

}
