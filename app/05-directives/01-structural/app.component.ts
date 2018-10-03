import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  template: `
<header>Structural Directive</header>
  <div *jlgTimes="i">hello {{i}}</div>
`,
styles: [
  `
  div {
    padding: 0 1em;
  }
  `
]
})
export class AppComponent { 
  i = 0;
  ngOnInit() {
    console.log('init app');
    // setInterval(() => {
    //   this.i++;
    //   if (this.i > 10) {
    //     this.i = 1;
    //   }
    // }, 1000);
    Observable.interval(1000).map(n => (n%10)+1).subscribe(n => this.i = n);
  }
}
