import { Component } from '@angular/core';
import generalData from '../../../../data/general.json';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutMeComponent {
  data = generalData;
}
