import { Component, Input, QueryList } from "@angular/core";
import { BaseComponent } from "../../../../sharedmodule";
import { GridColumnComponent } from "../components/grid.column.component";
import { GridConfig } from "../models/gridconfig";

@Component({
  selector: 'app-basegridview',
  template: '<div></div>'
})
export abstract class BaseGridViewComponent extends BaseComponent {
  @Input() title!: string;
  @Input() items!: any[];
  @Input() config!: GridConfig;
  @Input() columns!: QueryList<GridColumnComponent>;
  
  constructor() {
    super();
  }
}
