import { Component } from '@angular/core';
import { ProjectItemDto, ProjectsDto } from 'src/app/models/projectsDto';
import projectsData from '../../../../data/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent 
{
  data: ProjectsDto = projectsData;
  filterText: string = '';
  filteredItems: ProjectItemDto[] = [];

  constructor() {
    this.filterItems();
  }

  filterItems = () => {
    const { filterText, data: { items }} = this;
    let filteredItems: ProjectItemDto[] = items ?? [];

    if ((filterText ?? '').trim() != '') {
      filteredItems = filteredItems.filter(i => 
                                    (i.name ?? '').includes(filterText) ||
                                    (i.name ?? '').toLowerCase().includes(filterText.toLowerCase()) ||
                                    (i.title ?? '').includes(filterText) ||
                                    (i.title ?? '').toLowerCase().includes(filterText.toLowerCase()) ||
                                    (i.company ?? '').includes(filterText) ||
                                    (i.company ?? '').toLowerCase().includes(filterText.toLowerCase())
                                  );
    }
    console.log('filteredItems:', { filterText, items, filteredItems });
    this.filteredItems = filteredItems;
  }
}
