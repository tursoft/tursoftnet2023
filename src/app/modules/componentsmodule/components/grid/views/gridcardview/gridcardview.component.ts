import { Component } from '@angular/core';
import { BaseGridViewComponent } from '../basegridview';

@Component({
  selector: 'grid-cardview',
  templateUrl: './gridcardview.component.html',
  styleUrls: ['./gridcardview.component.scss']
})
export class GridCardViewComponent extends BaseGridViewComponent {  
  constructor() {
    super();
  }
}
