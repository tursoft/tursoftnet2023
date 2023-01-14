import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { BaseGridViewComponent } from '../basegridview';

export type getImageSrcDelegate = (item: any) => string;
@Component({
  selector: 'grid-cardview',
  templateUrl: './gridcardview.component.html',
  styleUrls: ['./gridcardview.component.scss'],
  providers: [{ provide: BaseGridViewComponent, useExisting: GridCardViewComponent }]
})
export class GridCardViewComponent extends BaseGridViewComponent {
  @Input() getImageSrc!: getImageSrcDelegate;
  @ContentChild('titleTemplate', { read: TemplateRef }) titleTemplate?: TemplateRef<any>;

  constructor() {
    super('card');
  }
}
