import { Component } from '@angular/core';
import { IHoverable } from 'src/app/models/shared';
import { SkillGroupDto, SkillItemDto, SkillsDto } from '../../../../models/skillsDto';
import skillsData from '../../../../data/skills.json';
import { AppUtils } from 'src/app/services/app-utils';
import { Utils } from 'src/app/modules/sharedmodule';

interface FilterDto {
  filterText?: string,
  group?: string
}

type SkillItem = SkillItemDto & IHoverable;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  data: SkillsDto = skillsData;
  
  groups: SkillGroupDto[] = [];
  allItems: SkillItem[] = [];
  filteredItems: SkillItem[] = [];
  filter: FilterDto = {};

  constructor(
    public utils: Utils,
    public appUtils: AppUtils)
  {
    const groupAll: SkillGroupDto = {
        name: undefined,
        title: 'All',
        orderIndex: -1
    };

    this.groups = [groupAll, ...this.data.general.groups];

    // prepare items
    const allItems = this.data.items.map(i => <SkillItem>i);
    this.allItems = allItems;
    
    this.filterItems();
  }

  filterItems = () => {
    const { filter: { filterText, group: filterGroup }, allItems} = this;
    
    var filteredItems = this.utils.filterItemsByText(allItems, ['name', 'title', 'group'], filterText);
    
    if (!this.utils.isEmptyString(filterGroup)) {
      filteredItems = filteredItems.filter(i => i.group == filterGroup);
    }

    this.filteredItems = filteredItems;
  }

  setGroup(group: string | undefined) {
    this.filter.group = group;
    this.filterItems();
  }

  clearFilter() {
    this.filter.filterText = undefined;
    this.filter.group = undefined;
    this.filterItems();
  }
}
