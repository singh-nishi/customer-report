import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { SampleComponent, SampleService, SampleModule } from 'dynamic-grid';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    SampleModule
    ],
  providers: [SampleService, SampleComponent],
  bootstrap: [AppComponent]
 })
export class AppModule {
}
