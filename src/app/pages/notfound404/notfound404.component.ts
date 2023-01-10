import { Component } from '@angular/core';
import { Session } from 'src/app/modules/sharedmodule/services/session';

@Component({
  selector: 'app-notfound404',
  templateUrl: './notfound404.component.html',
  styleUrls: ['./notfound404.component.scss']
})
export class Notfound404Component {
  constructor(public session: Session) {
    this.session.showTopMenu=false;
  }
}
