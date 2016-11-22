import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { SearchComponent }   from './swords/search/search.component';
import { SwordComponent }   from './swords/sword.component';
import { KeyboardComponent }   from './keyboard/keyboard.component';
import { RowComponent } from './keyboard/row/row.component';
import { KeyComponent } from './keyboard/key/key.component';
import { routing } from './app.routes';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule,FormsModule, routing],
  declarations: [ AppComponent,SearchComponent,SwordComponent,
    KeyboardComponent,RowComponent,KeyComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [{
    provide: LocationStrategy, useClass: HashLocationStrategy
  }]
})

export class AppModule { }
