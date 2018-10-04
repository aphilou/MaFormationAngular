import { Component, ElementRef, HostBinding } from '@angular/core';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'my-app',
  template: `
<header>HostBinding</header>
<span>Look I am changing my color...</span>

`,
  styles: [`
:host.red span {
  color: red;
}

:host.blue span {
  color: blue;
}
`]
})
export class AppComponent {
  constructor(private element: ElementRef) { }
  @HostBinding('class') myClass: string;
  ngOnInit() {
    console.log('AppComponent: init');
    interval(1000).map(n => n + 1).startWith(0)
      .map(n => ['blue', 'red'][n % 2]).subscribe(n => {
      console.log('n', n);
      this.myClass = n;
    });

  }


}
