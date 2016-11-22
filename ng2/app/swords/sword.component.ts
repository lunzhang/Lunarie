import { Component } from '@angular/core';
import { Swords } from './swords.model';

@Component({
  moduleId: module.id,
  selector: 'sword',
  templateUrl: './sword.component.html'
})

export class SwordComponent {

  swords=Swords.getSwords();

  constructor(){
  }

  onSearch(search){
    this.swords = Swords.searchSwords(search);
  }
}
