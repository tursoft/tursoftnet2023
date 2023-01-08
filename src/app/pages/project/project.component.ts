import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectItemDto, ProjectsDto } from 'src/app/models/projectsDto';
import { Session } from 'src/app/services/session';
import { Utils } from 'src/app/services/utils';
import projectsData from '../../data/projects.json';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  data: ProjectsDto = projectsData;
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
      this.id = parseInt(paramMap.get('id') ?? '0');
      this.item = this.data.items.find(p => p.id == this.id);
    });
  }
}
