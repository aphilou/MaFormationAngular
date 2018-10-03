import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<header>Event Binding</header>
<div>
  <button (click)="myAlert()">Click me!</button>
  <button on-click="myAlert()">Click me with canonical form!</button>
</div>
`, styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myAlert() {
    window.alert('Hello event binding!');
  }
}
