import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent { 
  myName = 'Angular 0'; 
  //i = 0;

  ngOnInit() {
    console.log('init the component');
    // setInterval(() => {
    //   this.i++;
    //   this.myName = `Angular ${this.i}`;
    // }, 1000);
    Observable.interval(1000).map(n => n+1).subscribe(n => { this.myName = `Angular ${n}`; });
  }
}
