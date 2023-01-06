import { Component } from '@angular/core';
import { from } from 'linq-to-typescript';
import { ProjectGroupDto, ProjectItemDto, ProjectsDto } from 'src/app/models/projectsDto';
import projectsData from '../../../../data/projects.json';

interface FilterDto {
  filterText?: string,
  group?: string
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent 
{
  data: ProjectsDto = projectsData;
  groups: ProjectGroupDto[] = [];
  filteredItems: ProjectItemDto[] = [];
  filter: FilterDto = {};

  constructor() {
    const groupAll: ProjectGroupDto = {
      name: undefined,
      title: 'All'
    };
    this.groups = [groupAll, ...this.data.general.groups];
    this.filterItems();
  }

  filterItems = () => {
    const { filter, filter: { filterText }, data: { items }} = this;
    let filteredItems: ProjectItemDto[] = items ?? [];

    if (filterText && filterText.trim() != '') {
      filteredItems = filteredItems.filter(i => 
                                    (i.name ?? '').includes(filterText) ||
                                    (i.name ?? '').toLowerCase().includes(filterText.toLowerCase()) ||
                                    (i.title ?? '').includes(filterText) ||
                                    (i.title ?? '').toLowerCase().includes(filterText.toLowerCase()) ||
                                    (i.company ?? '').includes(filterText) ||
                                    (i.company ?? '').toLowerCase().includes(filterText.toLowerCase())
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
