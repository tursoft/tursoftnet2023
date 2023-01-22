import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppUtils } from 'src/app/services/app-utils';
import { ExperienceDto, ExperiencesDto } from '../../../../models/experiencesData';
import experiencesData from '../../../../data/experiences.json';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  data: ExperiencesDto = experiencesData;
  items: ExperienceDto[] = [];


  constructor(
    public appUtils: AppUtils,
    public router: Router)
  {
    this.items = experiencesData.items;
  }
}
