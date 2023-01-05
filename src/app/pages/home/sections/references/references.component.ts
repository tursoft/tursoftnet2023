import { Component } from '@angular/core';
import referenceData from '../../../../data/references.json';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  data = referenceData;
}
