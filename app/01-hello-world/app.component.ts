import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<header class="toto">Hello {{name}}</header>`,
  styles: [ `.toto { color: red; }`]
})
export class AppComponent  { 
  name = 'Angular !!!'; 

  constructor() {
    setTimeout(() => {
      this.name = "Angular 5....";
    }, 2000);
  }
}

console.log('AppComponent %O', AppComponent);

