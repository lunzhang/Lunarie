import { Component,Input,EventEmitter,Output } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'key',
  templateUrl: './key.component.html'
})

export class KeyComponent {

  timer;
  activated : boolean = false;
  wrong:boolean=false;
  @Input() value;
  @Output() onEvent = new EventEmitter();

  activate(){
    this.activated = true;
    this.timer = setTimeout(()=>{
      this.onEvent.emit(this);
    },3500);
  }

  deactivate(){
    clearTimeout(this.timer);
    this.wrong=false;
    this.activated = false;
  }

  error(){
    this.wrong=true;
    return this;
  }

}
