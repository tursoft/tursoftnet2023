import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { getImageSrcDelegate } from '../../models';
import { BaseGridViewComponent } from '../basegridview';

@Component({
  selector: 'grid-cardview',
  templateUrl: './grid-cardview.component.html',
  styleUrls: ['./grid-cardview.component.scss'],
  providers: [{ provide: BaseGridViewComponent, useExisting: GridCardViewComponent }]
})
export class GridCardViewComponent extends BaseGridViewComponent {
  @Input() getImageSrc!: getImageSrcDelegate;
  @ContentChild('titleTemplate', { read: TemplateRef }) titleTemplate?: TemplateRef<any>;

  constructor() {
    super('card');
  }
}
