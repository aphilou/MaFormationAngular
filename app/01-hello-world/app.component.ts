import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<header>Hello {{name}}</header>`,
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

