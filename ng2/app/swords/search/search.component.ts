import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  @Output() searchReq = new EventEmitter();
  search = {};

  constructor(){
  }

  onSearch(){
    this.searchReq.emit(this.search);
  }

}
