import { Component } from "@angular/core";
import { BaseGridViewComponent } from "../basegridview";

@Component({
  selector: 'app-gridlistview',
  templateUrl: './gridlistview.component.html',
  styleUrls: ['./gridlistview.component.scss']
})
export class GridListViewComponent extends BaseGridViewComponent {  
  constructor() {
    super();
  }
}
