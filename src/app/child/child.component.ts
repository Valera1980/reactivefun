import { Component, OnInit ,EventEmitter, Output, Input, OnDestroy} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
     this.subjectForChild.unsubscribe();
  }

  @Output()toParentEvent:EventEmitter<any> = new EventEmitter();
  @Input() subjectForChild:Subject<any>;
  constructor() { }

  ngOnInit() {
    this.subjectForChild.subscribe(data => {
    console.log('TCL: ChildComponent -> ngOnInit -> data', data);
    console.log('TCL: ChildComponent -> ngOnInit -> daffghfhfghfhfgha', data);
      
    })
  }

  emitParent(){
    this.toParentEvent.emit('999999');
  }

}
