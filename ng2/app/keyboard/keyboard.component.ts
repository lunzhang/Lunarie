import { Component, ViewChildren, HostListener } from '@angular/core';
import { RowComponent } from './row/row.component';

@Component({
  moduleId: module.id,
  selector: 'keyboard',
  templateUrl: './keyboard.component.html'
})

export class KeyboardComponent implements ngAfterViewInit {

  @ViewChildren(RowComponent) private rowComponents;

  rows = [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']];
  timers = [];
  activatedKeys = {};
  errorKey = null;
  inProgress = false;
  score = 0;
  highScore = localStorage.kbHighScore || 0;
  gameSpeed = 800;

  //starts game
  start() {
    if (!this.inProgress){
      this.inProgress = true;
      if(this.errorKey)
        this.errorKey.deactivate();
      this.beginTimer();
    }
  }

  //timer to activate random key
  beginTimer(){
    var timer = setTimeout(() => {
        var rowNum = Math.floor((Math.random() * 4));
        var keyNum = Math.floor((Math.random() * this.rows[rowNum].length));
        var key = this.rowComponents._results[rowNum].getKey(keyNum);
        if(!this.activatedKeys[key.value]){
          key.activate();
          this.activatedKeys[key.value] = key;
        }
        if(this.inProgress)
          this.beginTimer();
    }, this.gameSpeed);
    this.timers.push(timer);
  }

  //end of game
  end() {
    this.inProgress = false;
    //clear timers
    for(var i=0;i<this.timers.length;i++){
      clearTimeout(this.timers[i]);
    }
    this.timers=[];
    //remove active keys
    for(var prop in this.activatedKeys) {
      this.activatedKeys[prop].deactivate();
    }
    this.activatedKeys = {};
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.kbHighScore = this.highScore;
    }
    this.score = 0;
    this.gameSpeed = 800;
  }

  //listen for lose event
  rowEvent(key) {
    this.errorKey = key;
    this.errorKey.error();
    this.end();
  }

  //key handler
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(e: KeyboardEvent) {
    if (this.inProgress) {
      if (this.activatedKeys[e.key]) {
        this.activatedKeys[e.key].deactivate();
        delete this.activatedKeys[e.key];
        this.score++;
        this.gameSpeed = this.gameSpeed > 500 ? 800 - (this.score * 10) : 500;
      } else {
        //wrong key pressed
        for(var i=0;i<this.rows.length;i++){
            for(var j=0;j<this.rows[i].length;j++){
                if(e.key == this.rows[i][j]){
                  this.errorKey = this.rowComponents._results[i].errorKey(j);
                }
            }
        }
        this.end();
      }
    } else {
      if (e.key == "Enter") {
        this.start();
      }
    }
  }

}
