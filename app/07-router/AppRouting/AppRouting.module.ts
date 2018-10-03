import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProductComponent } from './product.component';
import { AboutComponent } from './about.component';

// Configuration static des routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
  {
    path: 'about', component: AboutComponent, data: {
      appName: 'JLG Consulting',
    }
  },
  { path: '**', redirectTo: '/' }
];

// La configuration est passé au module RouterModule
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
