import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExperienceDto, ExperiencePositionDto } from 'src/app/models/experiencesData';
import { Session, Utils } from '../../modules/sharedmodule';
import { AppUtils } from '../../services/app-utils';
import experiencesData from '../../data/experiences.json';

interface ExperiencePositionItemDto {
  experience: ExperienceDto;
  position: ExperiencePositionDto;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  items: ExperiencePositionItemDto[] = [];
  item?: ExperiencePositionItemDto;
  id?: number;

  constructor(
    public utils: Utils,
    public appUtils: AppUtils,
    public session: Session,
    public route: ActivatedRoute
  ) {
    this.session.showTopMenu=false;

    let items: ExperiencePositionItemDto[] = [];
    for(const experience of experiencesData.items) {
      if (experience.positions) {
        for(const position of experience.positions) {
          items.push({ experience, position });
        }
      }
    }
    this.items = items;
  }

  ngOnInit(){
    this.route.paramMap.subscribe( paramMap => {
      const id = parseInt(paramMap.get('id') ?? '0');
      this.setById(id);
    });
  }

  setById(id: number) {
    this.id = id;
    this.item = this.items.find(p => p.position.id == this.id);
    console.log('item:', { id, item: this.item, items: this.items });
  }
}
