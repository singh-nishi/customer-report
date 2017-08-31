import { Component, OnInit} from '@angular/core';
import { CommonComponentComponent } from '../common-component/common-component.component';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css'],
   providers: [CommonComponentComponent]
})
export class InputComponentComponent implements OnInit {

  constructor(private _commCompAcess: CommonComponentComponent) { 
  }
  ngOnInit() {
  }

  getDataFromComponent(){
  // alert('Method Call child..'); 
   this._commCompAcess.getRecrods();
  }

}
