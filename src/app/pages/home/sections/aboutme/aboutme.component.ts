import { Component } from '@angular/core';
import { Utils } from '../../../../modules/sharedmodule';
import generalData from '../../../../data/general.json';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutMeComponent {
  data = generalData;
  
  constructor(public utils: Utils) {
  }

  isIntersecting (status: boolean,) {
    console.log('Element is intersecting ' + status)
  }
}
