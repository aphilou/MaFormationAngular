import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { JLGService, JLGModuleService } from './jlg.service';
import { ChildComponent } from './child.component';
import { HostComponent } from './host.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HostComponent, ChildComponent ],
  providers: [{ provide: JLGService, useClass: JLGModuleService }],
  bootstrap:    [ AppComponent ]
})
// l'alias du service JLGModuleService sera JLGService
export class AppModule { }
