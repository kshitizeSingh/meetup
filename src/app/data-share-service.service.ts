import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable()
export class DataShareServiceService {
  

  constructor() { }
  group:any
  loggedUser = new Subject<string>()

  setGroup(group){
    this.group=group
  }
  getGroup(){
    return this.group
  }
  setLoggedUser(loggedUser){
    this.loggedUser.next(loggedUser)
  }

}