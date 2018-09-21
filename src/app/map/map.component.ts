import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, filter, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  users;
  point:number = 0;

  constructor() { }

  ngOnInit() {
  }

  getArray():Observable<any>{
    return of([
      {
      name:'111',
      email:'111@111.net',
      age:20
    },
    {
      name:'222',
      email:'222@111.net',
      age:21
    },
    {
      name:'333',
      email:'333@111.net',
      age:22
    }
  ]);
  }
  
  transformArray(): Observable<any> {
    return this.getArray()
       .pipe(
          map(data => data.map(user => {
            user['date'] = new Date();
            return user;
          })
            .filter(user => user.name === '111')
          )
      )
  }

  getResult(){
    this.transformArray()
    .subscribe(data => {
    
      console.log('TCL: MapComponent -> getResult -> data', data);
      this.users = data;
    })
  }
  increase(){
    
    this.point += 1;
  }
  decrease(){
    
    this.point -= 1;
  }

}
