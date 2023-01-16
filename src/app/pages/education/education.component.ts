import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Session } from '../../modules/sharedmodule/services/session';
import { EducationDto, EducationsDto } from '../../models/educationsDto';
import educationsData from '../../data/education.json';
import { AppUtils } from 'src/app/services/app-utils';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  allItems: EducationsDto = educationsData;
  item?: EducationDto;
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
      this.setById(id);
    });
  }

  setById(id: number) {
    this.id = id;
    this.item = this.allItems.items.find(p => p.id == this.id);
  }
}
