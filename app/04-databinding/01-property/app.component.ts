import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  template: `
<header>Look at this image</header>
<div>
  <img [src]="niceImageUrl">
  <img bind-src="niceImageUrl">
</div>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  niceImageUrl = '../../assets/chateau.jpg';
  
  ngOnInit() {
    Observable.of('../../assets/beach.jpg').delay(4000).subscribe(n => this.niceImageUrl = n);
  }
}
