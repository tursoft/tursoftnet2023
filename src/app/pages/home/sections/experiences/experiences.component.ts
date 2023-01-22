import { Component } from '@angular/core';
import { AppUtils } from 'src/app/services/app-utils';
import experiencesData from '../../../../data/experiences.json';
import { ExperienceDto, ExperiencesDto } from '../../../../models/experiencesData';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  data: ExperiencesDto = experiencesData;
  items: ExperienceDto[] = [];
  // items: TimelineItem[] = [];

  constructor(public appUtils: AppUtils) {
    this.items = experiencesData.items;
    // this.items = from(experiencesData.items)
    //             .orderBy(e => e.orderIndex)
    //             .select(e => <TimelineItem>{
    //               code: e.id.toString(),
    //               title1: e.companyName,
    //               title2: e.positions[0].startDate + ' - ' + (e.positions[e.positions.length-1].endDate ?? 'Present'),
    //               content: `
    //               positions: ${e.positions}<br/>
    //               icon: ${e.icon}<br/>
    //               `
    //             })
    //             .toArray();
  }

  getExperienceImageName = (item: ExperienceDto) => {
    return this.appUtils.getExperienceImageName(item.icon ?? '');
  }
}
