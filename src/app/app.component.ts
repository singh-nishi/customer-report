import { Component } from '@angular/core';

import { SampleComponent } from 'dynamic-grid';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   data: any = [];
   constructor(private dyComponent: SampleComponent) {
    this.dyComponent.getRecrods();
   }
  title = 'app';

}
