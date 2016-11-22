import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl:'./app.component.html'
})

export class AppComponent implements ngOnInit{
  currentRoute='';

  constructor(private router: Router){

  }

  ngOnInit(){
    this.router.events.subscribe((r)=>{
      this.currentRoute = r.url;
      this.currentRoute = this.currentRoute.replace('/','');
    });
  }
}
