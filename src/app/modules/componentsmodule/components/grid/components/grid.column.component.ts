
import { AfterContentInit, Component, ContentChild, Input, OnDestroy, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'app-grid-column',
  template: ``
})
export class GridColumnComponent implements AfterContentInit, OnDestroy {
  @Input('name') name!: string;
  @Input('title') title?: string;

  @ContentChild('cellTemplate', { read: TemplateRef }) cellTemplate?: TemplateRef<any>;

  ngAfterContentInit() {
    console.log('col:', { 
        name: this.name, 
        title: this.title, 
        celltemplate: this.cellTemplate,
    });
  }

  ngOnDestroy(): void {
  }
}
