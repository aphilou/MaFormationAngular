import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<header>Input Decorator</header>
<hello first-name="Jean-Louis" lastName="GUÉNÉGO" [city]="myCity"></hello>
`,
})
export class AppComponent {
  myCity = 'Nancy';
  // Pour montrer que si dans le template on avait 
  // [first-name]="Jean-Louis"
  // alors ça serait interprété en Javascript et le champ serait "20"
  Jean: number = 32; 
  Louis: number = 12;
}
