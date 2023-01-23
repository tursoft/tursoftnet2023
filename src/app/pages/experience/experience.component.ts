import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExperiencePositionItemDto } from 'src/app/models/experiencesData';
import { Session, Utils } from '../../modules/sharedmodule';
import { SkillsRepository } from 'src/app/services/repositories/skillsRepository';
import { ExperiencePositionsRepository } from 'src/app/services/repositories/experiencePositionsRepository';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  item?: ExperiencePositionItemDto;
  id?: number;

  constructor(
    public repo: ExperiencePositionsRepository,
    public repoSkills: SkillsRepository,
    public utils: Utils,
    public session: Session,
    public route: ActivatedRoute
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
