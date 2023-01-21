import { Component, EventEmitter, Inject, Input, Output } from "@angular/core";
import { GridViewType, ListItem } from "..";
import { BaseComponent } from "../../../../sharedmodule";

@Component({
  template: ''
})
export abstract class BaseGridViewComponent extends BaseComponent {
  get items():ListItem[] { return this.getPropertyValue<ListItem[]>('items', null); }
  @Input() set items(value:ListItem[]) { this.setPropertyValue<ListItem[]>('items', value); }
  
  get item():ListItem { return this.getPropertyValue<ListItem>('item', null); }
  set item(value:ListItem ) { this.setPropertyValue<ListItem>('item', value); }

  @Output() itemClick = new EventEmitter<any>();
  
  constructor(@Inject('viewType') public viewType: GridViewType) {
    super();

    this.addPropertyChangedListener(['items'], () => {
      this.item = (this.items ?? [])[0];
    })
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

  getPrev() {
    if (!this.item)
      return;
    const prevItem = this.items[this.items.indexOf(this.item)-1];
    if (prevItem) {
      return prevItem;
    }
    return null;
  }

  getNext() {
    if (!this.item)
      return null;
    const nextItem = this.items[this.items.indexOf(this.item)+1];
    if (nextItem) {
      return nextItem;
    }

    return null;
  }

  setItem(item: ListItem) {
    this.item = item;
  }
  
  prev() {
    const prevItem = this.getPrev();
    if (!prevItem)
      return;
    this.setItem(prevItem);
  }

  next() {
    const nextItem = this.getNext();
    if (!nextItem)
      return;
    this.setItem(nextItem);
  }
}
