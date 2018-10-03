import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<header>2 ways binding</header>
<input [(ngModel)]="myName">
<input bindon-ngModel="myName">
{{myName}}
`,
})
export class AppComponent implements DoCheck {
  
  myName = 'Angular'; 

  ngDoCheck(): void {
    console.log(`MyName changed: ${this.myName}`);
  } 
}
