import { Injectable } from '@angular/core';

@Injectable()
export class DataShareServiceService {


  constructor() { }
  group:any

  setGroup(group){
    this.group=group
  }
  getGroup(){
    return this.group
  }

}