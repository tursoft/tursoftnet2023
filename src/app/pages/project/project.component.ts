import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProjectItemDto, ProjectsDto } from '../../models/projectsDto';
import { ProjectFileScreenshotDto, ProjectFilesDto } from '../../models/projectFileDto';
import { Session } from '../../modules/sharedmodule/services/session';
import { ProjectScreenshotDetailsComponent } from './screenshot-details/screenshot-details.component';
import { AppUtils } from '../../services/app-utils';
import projectsData from '../../data/projects.json';
import projectFilesData from '../../data/project_files.json';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  allProjects: ProjectsDto = projectsData;
  allProjectFiles: ProjectFilesDto = projectFilesData;
  projectScreenshots: ProjectFileScreenshotDto[] = [];
  item?: ProjectItemDto;
  id?: number;

  isSticky: boolean = false;

  constructor(
    public matDialog: MatDialog,
    public appUtils: AppUtils,
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
    this.item = this.allProjects.items.find(p => p.id == this.id);
    this.projectScreenshots = this.allProjectFiles.general[this.item?.name ?? '']?.screenshoots ?? [];
  }

  onScreenshotClick(screenshot: ProjectFileScreenshotDto) {
    ProjectScreenshotDetailsComponent.showDialog(this.matDialog, screenshot);
  }
}
