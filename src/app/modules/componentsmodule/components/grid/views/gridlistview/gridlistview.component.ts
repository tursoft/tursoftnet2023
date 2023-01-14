import { Component, ContentChildren, Input, QueryList } from "@angular/core";
import { GridColumnComponent } from "../..";
import { BaseGridViewComponent } from "../basegridview";

@Component({
  selector: 'grid-listview',
  templateUrl: './gridlistview.component.html',
  styleUrls: ['./gridlistview.component.scss'],
  providers: [{ provide: BaseGridViewComponent, useExisting: GridListViewComponent }]
})
export class GridListViewComponent extends BaseGridViewComponent {
  @ContentChildren(GridColumnComponent) columns!: QueryList<GridColumnComponent>;
  @Input() showColumnHeaders: boolean = true;
  
  constructor() {
    super('list');
  }
}
