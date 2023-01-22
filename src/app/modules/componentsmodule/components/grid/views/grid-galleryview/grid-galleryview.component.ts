import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { getImageSrcDelegate, ListItem } from '../../models';
import { BaseGridViewComponent } from '../basegridview';

@Component({
  selector: 'grid-galleryview',
  templateUrl: './grid-galleryview.component.html',
  styleUrls: ['./grid-galleryview.component.scss'],
  providers: [{ provide: BaseGridViewComponent, useExisting: GridGalleryViewComponent }]
})
export class GridGalleryViewComponent extends BaseGridViewComponent {
  @Input() getImageSrc!: getImageSrcDelegate;
  
  @ContentChild('titleTemplate', { read: TemplateRef }) titleTemplate?: TemplateRef<any>;
  @ContentChild('bodyTemplate', { read: TemplateRef }) bodyTemplate?: TemplateRef<any>;

  maxVisibleItemCount = 5;
  visibleSmallItems: ListItem[] = [];

  constructor() {
    super('gallery');

    this.addPropertyChangedListener(['items', 'item'], () => {
      this.updateVisibleItems();
    });

    this.updateVisibleItems();
  }

  updateVisibleItems() {
    const { maxVisibleItemCount } = this;
    const items = this.items ?? [];
    const currentItem = this.item;

    let visibleSmallItems: ListItem[] = [];
    if (currentItem) {
      let index = items.indexOf(currentItem);
      if (index + maxVisibleItemCount>items.length) {
        index = Math.max(items.length-maxVisibleItemCount-1, 0);
      }
      
      for(let i=index; i<items.length; i++) {
        if (visibleSmallItems.length>=maxVisibleItemCount) {
          break;
        }

        visibleSmallItems.push(items[i]);
      }
    }

    this.visibleSmallItems = visibleSmallItems;
  }
}
