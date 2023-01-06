import { Component } from '@angular/core';
import generalData from '../../data/general.json';
import { Utils } from '../services/utils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  data = generalData.general;

  constructor(public utils: Utils) {

  }
}
