import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { getImageSrcDelegate } from '../../models';
import { BaseGridViewComponent } from '../basegridview';

@Component({
  selector: 'grid-singlecardview',
  templateUrl: './grid-singlecardview.component.html',
  styleUrls: ['./grid-singlecardview.component.scss'],
  providers: [{ provide: BaseGridViewComponent, useExisting: GridSingleCardViewComponent }]
})
export class GridSingleCardViewComponent extends BaseGridViewComponent {
  @Input() getImageSrc!: getImageSrcDelegate;
  
  @ContentChild('titleTemplate', { read: TemplateRef }) titleTemplate?: TemplateRef<any>;
  @ContentChild('bodyTemplate', { read: TemplateRef }) bodyTemplate?: TemplateRef<any>;

  constructor() {
    super('singlecard');
  }
}
