import { Component } from '@angular/core';
import { ProjectGroupDto, ProjectItemDto, ProjectsDto } from '../../../../models/projectsDto';
import { IHoverable } from '../../../../models/shared';
import { Utils } from '../../../../modules/sharedmodule';
import projectsData from '../../../../data/projects.json';
import { ProjectsRepository } from 'src/app/services/repositories/projectsRepository';

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

  constructor(
    public repo: ProjectsRepository,
    public utils: Utils
  ) {
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
