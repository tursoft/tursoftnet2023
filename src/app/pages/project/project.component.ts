import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProjectItemDto, ProjectsDto } from '../../models/projectsDto';
import { ProjectFileScreenshotDto, ProjectFilesDto } from '../../models/projectFileDto';
import { Session } from '../../modules/sharedmodule/services/session';
import { ProjectScreenshotDetailsComponent } from './screenshot-details/screenshot-details.component';
import { ProjectUtils } from './project-utils';
import projectsData from '../../data/projects.json';
import projectFilesData from '../../data/project_files.json';
import { fromEvent } from 'rxjs';
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
    public projectUtils: ProjectUtils,
    public session: Session,
    public route: ActivatedRoute
  ) {
    this.session.showTopMenu=false;

    fromEvent(window, "scroll").subscribe(e => {
      this.onWindowScroll();
    });
  }

  ngOnInit(){
    this.route.paramMap.subscribe( paramMap => {
      const id = parseInt(paramMap.get('id') ?? '0');
      this.setProjectById(id);
    });
  }

  // @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    console.log('window.pageYOffset:', window.pageYOffset);
    this.isSticky = window.pageYOffset >= 250;
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
