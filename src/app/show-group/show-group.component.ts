import { Component, OnInit } from '@angular/core';
import {DataShareServiceService} from '../data-share-service.service'

@Component({
  selector: 'app-show-group',
  templateUrl: './show-group.component.html',
  styleUrls: ['./show-group.component.css']
})
export class ShowGroupComponent implements OnInit {
  group:any
  lat
  lon
  constructor( private dataShare:DataShareServiceService) { }

  ngOnInit() {
   this.group= this.dataShare.getGroup()
  this.lat=this.group.lat
  this.lon=this.group.lon
  }

}