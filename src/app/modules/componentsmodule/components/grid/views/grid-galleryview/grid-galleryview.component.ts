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

  itemsSmall: ListItem[] = [
    {},
    {},
    {},
    {},
    {}
  ]

  constructor() {
    super('gallery');
  }
}
