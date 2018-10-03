import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'product-view',
  template: `
<h1>Product</h1>
<section>
  Product {{id}}
</section>
`,
})
export class ProductComponent {
  constructor(private route: ActivatedRoute, private titleService: Title) {
    // id est défini dans AppRouting.module.ts
    const myParam: Observable<string> = route.params.map(p => p.id);
    myParam.subscribe(s => {
      this.id = +s;
      this.titleService.setTitle('Product ' + this.id);
    });
    
  }
  id;
  
}
