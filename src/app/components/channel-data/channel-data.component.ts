import {Component, Input, OnInit} from '@angular/core';
import {ChannelData} from "../../models/channelData";

@Component({
  selector: 'app-channel-data',
  templateUrl: './channel-data.component.html',
  styleUrls: ['./channel-data.component.css']
})
export class ChannelDataComponent implements OnInit {

  @Input() channelData : ChannelData;

  constructor() { }

  ngOnInit() {
  }

}
