import { Component } from '@angular/core';
import { StatisticsDto } from 'src/app/models/statisticsDto';
import statisticsData from '../../../../data/statistics.json';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  data: StatisticsDto = statisticsData;
}
