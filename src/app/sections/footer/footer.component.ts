import { Component } from '@angular/core';
import generalData from '../../data/general.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  general = generalData.general;
}
