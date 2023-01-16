import { Component } from '@angular/core';
import { TimelineItem } from '../../../../modules/componentsmodule';
import educationData from '../../../../data/education.json';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent {
  items: TimelineItem[] = [];

  constructor(router: Router) {
    this.items = educationData.items.map(item => <TimelineItem>{
      code: item.id.toString(),
      title1: item.level,
      title2: item.department,
      url: '/#' + router.createUrlTree(['educations', item.id]).toString(),
      content: `
      <div class='timeline-body'>
        <div class='col1'>
          <strong>${item.name}</strong><br/>
          ${item.city} / ${item.datePeriod.startDate + ' - ' + (item.datePeriod.endDate ?? 'Present')}<br/>
          Graduation Date: ${item.graduateDate}<br/>
        </div>

        <div class='col2'>
          <img class='box-icon' src='/assets/images/academic/${item.icon}'>
        </div>        
      </div>
      `
    });
  }
}
