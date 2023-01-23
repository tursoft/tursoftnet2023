import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ProjectScreenshotDetailsComponent } from './screenshot-details/screenshot-details.component';
import { ProjectItemDto } from '../../models/projectsDto';
import { ProjectFileScreenshotDto } from '../../models/projectFileDto';
import { Session } from '../../modules/sharedmodule/services/session';
import { SkillsRepository } from '../../services/repositories/skillsRepository';
import { ProjectsRepository } from '../../services/repositories/projectsRepository';
import { ProjectFilesRepository } from '../../services/repositories/projectFilesRepository';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  projectScreenshots: ProjectFileScreenshotDto[] = [];
  item?: ProjectItemDto;
  id?: number;

  isSticky: boolean = false;

  constructor(
    public matDialog: MatDialog,
    public repo: ProjectsRepository,
    public repoProjectFiles: ProjectFilesRepository,
    public repoSkills: SkillsRepository,
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
    this.item = this.repo.getById(this.id);
    this.projectScreenshots = this.repoProjectFiles.getScreenshotsByProjectName(this.item?.name ?? '');
  }

  onScreenshotClick(screenshot: ProjectFileScreenshotDto) {
    ProjectScreenshotDetailsComponent.showDialog(this.matDialog, screenshot);
  }
}
