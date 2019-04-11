import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

   constructor(private http: HttpClient) { }
   login(data): Observable<any> {
    return this.http.post('url',data) 
  }

}