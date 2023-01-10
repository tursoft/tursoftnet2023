import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '../../../sharedmodule';
import { TimelineItem } from './models/timelineitem';

@Component({
  selector: 'app-verticaltimeline',
  templateUrl: './verticaltimeline.component.html',
  styleUrls: ['./verticaltimeline.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class VerticaltimelineComponent extends BaseComponent {
  @Input() items: TimelineItem[] = [];

  constructor() {
    super();
  }
}
