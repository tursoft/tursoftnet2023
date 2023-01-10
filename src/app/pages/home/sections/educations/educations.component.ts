import { Component } from '@angular/core';
import { TimelineItem } from '../../../../modules/componentsmodule';
import educationData from '../../../../data/education.json';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent {
  items: TimelineItem[] = [];

  constructor() {
    this.items = educationData.items.map(e => <TimelineItem>{
      code: e.id.toString(),
      title1: e.level,
      title2: e.department,
      content: `
      <div class='timeline-body'>
        <div class='col1'>
          <strong>${e.name}</strong><br/>
          ${e.city} / ${e.datePeriod.startDate + ' - ' + (e.datePeriod.endDate ?? 'Present')}<br/>
          Graduation Date: ${e.graduateDate}<br/>
        </div>

        <div class='col2'>
          <img class='box-icon' src='/assets/images/academic/${e.icon}'>
        </div>        
      </div>
      `
    });
  }
}
