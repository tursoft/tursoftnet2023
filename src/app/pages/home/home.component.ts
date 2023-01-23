import { Component } from '@angular/core';
import { Session } from 'src/app/modules/shared.module/services/session';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public session: Session) {
    this.session.showTopMenu=true;
  }
}
