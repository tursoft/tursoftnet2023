import { AfterContentInit, AfterViewInit, Component, ContentChild, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FilterListDto, GridViewType, ListItem } from './models';
import { BaseComponent, Utils } from '../../../sharedmodule';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent extends BaseComponent implements AfterViewInit, AfterContentInit {
  @Input() title!: string;

  @Input() showHeaderRow?: boolean = true;
  @Input() showFilterRow?: boolean = false;
  @Input() showCountBadge: boolean = true;

  @Input() viewTypes:GridViewType[] = ['card', 'list'];
  @Input() viewType: GridViewType = 'list';

  @Input() items!: any[];
  @Input() filterFields!: string[];

  filteredItems: ListItem[] = [];
  filter: FilterListDto = {};

  @ContentChild('viewsTemplate', { read: TemplateRef }) viewsTemplate?: TemplateRef<any>;

  constructor(
    public utils: Utils,
    public viewContainer: ViewContainerRef
  ) {
    super();
  }

  ngAfterContentInit(): void {
    this.filterItems();
  }

  ngAfterViewInit(): void {
    this.filterItems();
  }

  filterItems = () => {
    const { filter: { filterText } } = this;
    const items = (this.items ?? []);
    const filterFields = this.filterFields ?? [];
    
    var filteredItems = this.utils.filterItemsByText(items, filterFields, filterText);
    this.filteredItems = filteredItems;
  }

  clearFilter() {
    this.filter.filterText = undefined;
    this.filterItems();
  }

  setViewType(viewType: GridViewType) {
    this.viewType = viewType;
  }
}
