import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectItemDto, ProjectsDto } from '../../models/projectsDto';
import { Session } from '../../modules/sharedmodule/services/session';
import { Utils } from '../../modules/sharedmodule';
import projectsData from '../../data/projects.json';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  projects: ProjectsDto = projectsData;
  item?: ProjectItemDto;
  id?: number;

  constructor(
    public utils: Utils,
    public session: Session,
    public route: ActivatedRoute
  ) {
    this.session.showTopMenu=false;
  }

  ngOnInit(){
    this.route.paramMap.subscribe( paramMap => {
      const id = parseInt(paramMap.get('id') ?? '0');
      this.setProjectById(id);
    });
  }

  setProjectById(id: number) {
    this.id = id;
    this.item = this.projects.items.find(p => p.id == this.id);
  }
}
