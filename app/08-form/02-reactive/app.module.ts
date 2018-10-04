import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegionService } from './region.service';

// Déclaration du service au niveau global au module, son utilisation est alors possible ds le composant
@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  declarations: [AppComponent],
  providers: [RegionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
