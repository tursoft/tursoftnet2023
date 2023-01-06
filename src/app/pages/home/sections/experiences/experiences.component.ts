import { Component, ViewEncapsulation } from '@angular/core';
import { from } from 'linq-to-typescript';
import { TimelineItem } from 'src/app/components/verticaltimeline/verticaltimeline.component';
import experiencesData from '../../../../data/experiences.json';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  items: TimelineItem[] = [];
  
  constructor() {
    this.items = from(experiencesData.items)
                .orderBy(e => e.orderIndex)
                .select(e => <TimelineItem>{
                  code: e.id.toString(),
                  title1: e.companyName,
                  title2: e.positions[0].startDate + ' - ' + (e.positions[e.positions.length-1].endDate ?? 'Present'),
                  content: `
                  positions: ${e.positions}<br/>
                  icon: ${e.icon}<br/>
                  `
                })
                .toArray();
  }
}
