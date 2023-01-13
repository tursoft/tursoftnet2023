
import { AfterContentInit, Component, ContentChildren, Input, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { GridTemplateDirective } from 'src/app/modules/sharedmodule';

@Component({
  selector: 'app-grid-column',
  template: ``
})
export class GridColumnComponent implements AfterContentInit, OnDestroy {
  @Input('name') name!: string;
  @Input('title') title?: string;

  headerTemplate?: TemplateRef<any>;
  cellTemplate?: TemplateRef<any>;

  @ContentChildren(GridTemplateDirective) templates!: QueryList<any>;

  ngAfterContentInit() {
    this.templates.forEach((item: GridTemplateDirective) => {
        switch (item.getType()) {
            case 'header':
                this.headerTemplate = item.template;
                break;

            case 'cell':
                this.cellTemplate = item.template;
                break;
        }
    });

    console.log('col:', { name: this.name, title: this.title, celltemplate: this.cellTemplate, headerTemplate: this.headerTemplate });
  }

  ngOnDestroy(): void {
  }
}
