import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, delay ,take } from 'rxjs/operators';
import { ForkJsonService } from '../fork-json.service';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent implements OnInit {

  constructor(private httpUsers: ForkJsonService) { }

  ngOnInit() {
  }

  getObOne():Observable<any>{
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next('observer one');
        observer.complete();
      }, 2000);
    })
  }
  getObTwo(){
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next('observer two');
        observer.complete();
      }, 2000);
    })
  }
  getObThree(){
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next('observer three');
        observer.complete();
      }, 3000);
    })
  }

  get(){
    console.log('TCL: ForkJoinComponent -> get -> res');

     forkJoin(
       this.getObOne(),
       this.getObTwo(),
       this.getObThree()
     )
     
     .pipe(
      //  take(1),
       catchError(error => of(error))
       )
     .subscribe(([res1,res2,res3]) => {
        console.log('TCL: ForkJoinComponent -> get -> res1', res1);
        console.log('TCL: ForkJoinComponent -> get -> res2', res2);
        console.log('TCL: ForkJoinComponent -> get -> res3', res3);
       
     },err => console.log(err),
     () => console.log('completed'))
  }
  getHttp(){
     forkJoin(
       this.httpUsers.geetUsersOne(),
       this.httpUsers.geetUsersTwo(),
       this.httpUsers.geetUsersThree(),
     )
     .subscribe(data => {
     console.log('TCL: ForkJoinComponent -> getHttp -> data', data);
       
     })
  }

}
