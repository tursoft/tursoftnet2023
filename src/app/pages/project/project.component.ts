import { Component } from '@angular/core';
import { ProjectsDto } from 'src/app/models/projectsDto';
import projectsData from '../../data/projects.json';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  data: ProjectsDto = projectsData;
}
