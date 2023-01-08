import { Component } from '@angular/core';
import { ProjectGroupDto, ProjectItemDto, ProjectsDto } from 'src/app/models/projectsDto';
import { IHoverable } from 'src/app/models/shared';
import { Utils } from 'src/app/services/utils';
import projectsData from '../../../../data/projects.json';

interface FilterDto {
  filterText?: string,
  group?: string
}

type ProjectItem = ProjectItemDto & IHoverable;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent 
{
  data: ProjectsDto = projectsData;
  groups: ProjectGroupDto[] = [];
  filteredItems: ProjectItem[] = [];
  filter: FilterDto = {};

  constructor(public utils: Utils) {
    const groupAll: ProjectGroupDto = {
      name: undefined,
      title: 'All'
    };
    this.groups = [groupAll, ...this.data.general.groups];
    this.filterItems();
  }

  filterItems = () => {
    const { filter, filter: { filterText }, data: { items }} = this;
    let filteredItems: ProjectItem[] = (items ?? []);

    filteredItems = this.utils.filterItemsByText(filteredItems, ['name', 'title', 'company'], filterText);
    
    if (!this.utils.isEmptyString(filter.group)) {
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
