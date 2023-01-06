import { Component, Input, ViewEncapsulation } from '@angular/core';

export interface TimelineItem {
  code: string;
  title1: string;
  title2: string;
  content: string;
}

@Component({
  selector: 'app-verticaltimeline',
  templateUrl: './verticaltimeline.component.html',
  styleUrls: ['./verticaltimeline.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class VerticaltimelineComponent {
  @Input() items: TimelineItem[] = [];
}
