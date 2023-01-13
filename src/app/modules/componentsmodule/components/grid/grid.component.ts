import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { GridConfig } from './models';
import { GridColumnComponent } from './components';
import { BaseComponent } from '../../../sharedmodule';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent extends BaseComponent {
  @Input() title!: string;
  @Input() items!: any[];
  @Input() config!: GridConfig
  
  @ContentChildren(GridColumnComponent) columns!: QueryList<GridColumnComponent>;

  constructor() {
    super();
  }
}
