import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { ExperienceDto } from '../../../../models/experiencesData';
import { ExperiencesRepository } from 'src/app/services/repositories/experiencesRepository';
import { ExperiencePositionsRepository } from 'src/app/services/repositories/experiencePositionsRepository';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  items: ExperienceDto[] = [];

  constructor(
    public repo: ExperiencesRepository,
    public repoExperiencePositions: ExperiencePositionsRepository,
    public router: Router)
  {
    this.items = repo.getItems();
  }
}
