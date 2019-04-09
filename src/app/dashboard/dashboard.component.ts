import { Component, OnInit } from '@angular/core';
import {DataShareServiceService} from '../data-share-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataShare:DataShareServiceService) { }
  user:string
  ngOnInit() {
    this.dataShare.loggedUser.subscribe(
      user=>{
        this.user=user
      }
    )
  }

}