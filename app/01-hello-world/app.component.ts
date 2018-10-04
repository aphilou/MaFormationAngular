import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<header class="toto">Hello {{getName()}}</header>`,
  styles: [ `.toto { color: red; }`]
})
export class AppComponent  { 
  name = 'Angular !!!'; 

  constructor() {
    setTimeout(() => {
      this.name = "Angular 5....";
    }, 2000);
  }

  getName() {
    return this.name;
  }
}

console.log('AppComponent %O', AppComponent);

