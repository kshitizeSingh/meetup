import { Component, OnInit } from '@angular/core';
import {GroupsSeviceService} from './groups-sevice.service'
import {DataShareServiceService} from '../data-share-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  allGroups:any
  showBackground= true

  constructor(private groupService:GroupsSeviceService, private dataShare:DataShareServiceService ,private route:Router) { }

  ngOnInit() {
    this.groupService.getAllgroups().subscribe(
      response=>{
        this.allGroups=response
      },
      error=>{
        console.log(error)
      }
    )
  }

  showDetail(group){
    this.dataShare.setGroup(group);
    this.route.navigate(['/details'])
  }

}