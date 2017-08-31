import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { Myservice } from './myservice.service';
import { HttpModule } from '@angular/http';
import { InputComponentComponent } from './input-component/input-component.component';
import { CommonComponentComponent } from './common-component/common-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    CommonComponentComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [Myservice],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
