import { Component } from '@angular/core';
import generalData from '../../../../data/general.json';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  data = generalData;
}
