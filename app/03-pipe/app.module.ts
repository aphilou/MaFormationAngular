import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JoinPipe } from './join.pipe';
import { DuplicatePipe } from './duplicate.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, JoinPipe, DuplicatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
