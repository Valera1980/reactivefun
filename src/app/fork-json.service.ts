import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForkJsonService {

  constructor(private httpServ: HttpClient) { }
  geetUsersOne(): Observable<any> {
    return this.httpServ.get('http://localhost:3000/user');
  }
  geetUsersTwo(): Observable<any> {
    return this.httpServ.get('http://localhost:3000/user');
  }
  geetUsersThree(): Observable<any> {
    return this.httpServ.get('http://localhost:3000/user');
  }
}