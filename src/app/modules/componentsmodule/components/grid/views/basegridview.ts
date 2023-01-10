import { Component, Input } from "@angular/core";
import { BaseComponent } from "../../../../sharedmodule";
import { GridConfig } from "../models/gridconfig";

@Component({
  selector: 'app-basegridview',
  template: '<div></div>'
})
export abstract class BaseGridViewComponent extends BaseComponent {
  @Input() items!: any[];
  @Input() config!: GridConfig;
  
  constructor() {
    super();
  }
}
