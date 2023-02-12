import { AfterContentInit, AfterViewInit, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { FilterListDto, GridViewType, ListItem } from './models';
import { BaseComponent, Utils } from '../../../shared.module';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent extends BaseComponent implements AfterViewInit, AfterContentInit {
  @Input() title!: string;
  @Input() customClass?: string;

  @Input() showHeaderRow?: boolean = true;
  @Input() showFilterRow?: boolean = false;
  @Input() showStandaloneFilterRow?: boolean = false;
  @Input() showCountBadge: boolean = true;

  @Input() viewTypes:GridViewType[] = ['card', 'list', 'singlecard', 'gallery'];
  @Input() viewType: GridViewType = 'list';

  @Input() items!: any[];
  @Input() filterFields!: string[];

  @Output() itemClick = new EventEmitter<any>();

  filterFocused: boolean = false;

  filteredItems!: any[];
  filter: FilterListDto = {
    filterText: ""
  };

  @ContentChild('viewsTemplate', { read: TemplateRef }) viewsTemplate?: TemplateRef<any>;

  constructor(
    public matDialog: MatDialog, 
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

  getViewTypeIconCssClass(viewType: GridViewType) {
    switch(viewType) {
      case 'list': return 'fa-regular fa-bars';
      case 'card': return 'fa-solid fa-grip'; // 'fa-regular fa-grid';
      case 'singlecard': return 'fa-solid fa-rug'; // 'fa-regular fa-grid';
      case 'gallery': return 'fa-solid fa-tv'; // 'fa-regular fa-gallery-thumbnails';
    }
  }

  onItemClick = async (item: ListItem) => {
    await this.itemClick?.next(item);
  }
}
