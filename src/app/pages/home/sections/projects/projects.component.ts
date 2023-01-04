import { Component } from '@angular/core';
import { ProjectsDto } from 'src/app/models/projectsDto';
import projectsData from '../../../../data/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  data: ProjectsDto = projectsData;
}
