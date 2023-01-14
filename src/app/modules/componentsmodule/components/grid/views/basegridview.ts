import { Component, Inject, Input } from "@angular/core";
import { GridViewType, ListItem } from "..";
import { BaseComponent } from "../../../../sharedmodule";

@Component({
  template: ''
})
export abstract class BaseGridViewComponent extends BaseComponent {
  @Input() items?: ListItem[];
  
  constructor(@Inject('viewType') public viewType: GridViewType) {
    super();
  }

  getFieldValue(item: any, columnName: string) {
    return item[columnName];
  }
}
