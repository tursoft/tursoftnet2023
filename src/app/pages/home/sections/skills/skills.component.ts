import { Component } from '@angular/core';
import { IHoverable } from '../../../../models/shared';
import { SkillGroupDto, SkillDto, SkillsDto } from '../../../../models/skillsDto';
import { Utils } from '../../../../modules/shared.module';
import { SkillsRepository } from '../../../../services/repositories/skillsRepository';

interface FilterDto {
  filterText?: string,
  group?: string
}

type SkillItem = SkillDto & IHoverable;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  data: SkillsDto;
  
  groups: SkillGroupDto[] = [];
  allItems: SkillItem[] = [];
  filteredItems: SkillItem[] = [];
  filter: FilterDto = {};

  constructor(
    public repo: SkillsRepository,
    public utils: Utils
  ) {
    this.data = this.repo.getData();

    const groupAll: SkillGroupDto = {
        name: undefined,
        title: 'All',
        orderIndex: -1
    };

    this.groups = [groupAll, ...this.data.general.groups];

    // prepare items
    const allItems = this.repo.getItems().map(i => <SkillItem>i);
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
