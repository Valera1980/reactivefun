import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  fromChildEvent;
  subjectForChild:Subject<any> = new Subject();
  constructor() { }

  ngOnInit() {
  }

  fromChild(event){
    console.log('TCL: ParentComponent -> fromChild -> event', event);
    this.fromChildEvent = event;
  }

  toChild(event){
    this.subjectForChild.next('nnnnnnnnnnnnnnnnnnnnnnnnnnn');
  }

}
