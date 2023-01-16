import { Component, EventEmitter, Inject, Input, Output } from "@angular/core";
import { GridViewType, ListItem } from "..";
import { BaseComponent } from "../../../../sharedmodule";

@Component({
  template: ''
})
export abstract class BaseGridViewComponent extends BaseComponent {
  @Input() items?: ListItem[];
  @Output() itemClick = new EventEmitter<any>();
  
  constructor(@Inject('viewType') public viewType: GridViewType) {
    super();
  }

  getFieldValue(item: any, columnName: string) {
    return item[columnName];
  }

  onItemClick = async ($event:Event, item: ListItem) => {
    const { itemClick } = this;
    $event.stopPropagation();
    console.log('onItemClick:', { $event, item, itemClick });
    await itemClick?.next(item);
  }
}
