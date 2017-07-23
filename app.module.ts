import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyDynamicComponent, ChildOne, ChildTwo } from './dc/index.ts';
import { AppComponent } from './app.component.ts';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, MyDynamicComponent, ChildOne, ChildTwo ],
  entryComponents: [ ChildOne, ChildTwo ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}
