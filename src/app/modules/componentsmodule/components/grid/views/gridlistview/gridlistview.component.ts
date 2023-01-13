import { Component } from "@angular/core";
import { BaseGridViewComponent } from "../basegridview";

@Component({
  selector: 'grid-listview',
  templateUrl: './gridlistview.component.html',
  styleUrls: ['./gridlistview.component.scss']
})
export class GridListViewComponent extends BaseGridViewComponent {  
  constructor() {
    super();
  }
}
