import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Session } from '../../modules/sharedmodule/services/session';
import { EducationDto } from '../../models/educationsDto';
import { EducationsRepository } from 'src/app/services/repositories/educationsRepository';
import { SkillsRepository } from 'src/app/services/repositories/skillsRepository';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  item?: EducationDto;
  id?: number;

  isSticky: boolean = false;

  constructor(
    public matDialog: MatDialog,
    public repoSkills: SkillsRepository,
    public session: Session,
    public route: ActivatedRoute,
    public repo: EducationsRepository
  ) {
    this.session.showTopMenu=false;
  }

  ngOnInit(){
    this.route.paramMap.subscribe( paramMap => {
      const id = parseInt(paramMap.get('id') ?? '0');
      this.setById(id);
    });
  }

  setById(id: number) {
    this.id = id;
    this.item = this.repo.getById(id);
  }
}
