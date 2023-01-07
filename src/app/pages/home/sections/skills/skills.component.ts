import { Component } from '@angular/core';
import { from } from 'linq-to-typescript';
import { SkillGroupDto, SkillItemDto, SkillsDto } from 'src/app/models/skillsDto';
import skillsData from '../../../../data/skills.json';

interface FilterDto {
  filterText?: string,
  group?: string
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  data: SkillsDto = skillsData;
  
  groups: SkillGroupDto[] = [];
  filteredItems: SkillItemDto[] = [];
  filter: FilterDto = {};

  constructor() {
    const groupAll: SkillGroupDto = {
      name: undefined,
      title: 'All'
    };
    this.groups = [groupAll, ...this.data.general.groups];
    this.filterItems();
  }

  qetItemIconName(item: SkillItemDto) {
    return item.name.replaceAll(' ','')
                    .replace('.', '')
                    .replace('#', 'sharp')
                    .toLowerCase() + '.png';
  }

  filterItems = () => {
    const { filter, filter: { filterText }, data: { items }} = this;
    let filteredItems: SkillItemDto[] = items ?? [];

    if (filterText && filterText.trim() != '') {
      filteredItems = filteredItems.filter(i => 
                                    (i.name ?? '').includes(filterText) ||
                                    (i.name ?? '').toLowerCase().includes(filterText.toLowerCase()) ||
                                    (i.title ?? '').includes(filterText) ||
                                    (i.title ?? '').toLowerCase().includes(filterText.toLowerCase())
                                  );
    }
    
    if ((filter.group ?? '') != '') {
      filteredItems = filteredItems.filter(i => i.group == filter.group);
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
