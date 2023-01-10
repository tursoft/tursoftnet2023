import { Component, Input } from '@angular/core';
import { GridConfig } from './models/gridconfig';
import { BaseComponent } from '../../../sharedmodule';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent extends BaseComponent {
  @Input() items!: any[];
  @Input() config!: GridConfig;
  
  constructor() {
    super();
  }
}
