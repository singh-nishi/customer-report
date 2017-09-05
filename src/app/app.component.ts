import { Component } from '@angular/core';

import { SampleComponent,SampleService } from 'dynamic-grid';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   data: any = [];
   customURL:string;
   constructor(private dyComponent: SampleComponent,private _service: SampleService) {
   _service.jsonURL="https://restcountries.eu/rest/v2/all";
    this.dyComponent.getRecrods(_service.jsonURL);
   }
  title = 'app';
}
