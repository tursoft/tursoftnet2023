
import { AfterContentInit, Component, ContentChild, Input, OnDestroy, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'grid-column',
  template: ``
})
export class GridColumnComponent implements AfterContentInit, OnDestroy {
  @Input('name') name!: string;
  @Input('title') title?: string;

  @ContentChild('cellTemplate', { read: TemplateRef }) cellTemplate?: TemplateRef<any>;
  @ContentChild('headerTemplate', { read: TemplateRef }) headerTemplate?: TemplateRef<any>;

  ngAfterContentInit() {
  }

  ngOnDestroy(): void {
  }
}
