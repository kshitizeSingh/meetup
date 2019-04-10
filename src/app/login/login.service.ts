import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

   constructor(private http: HttpClient) { }
   getAllgroups(data): Observable<any> {
    return this.http.post('url',data)
 
  }

}