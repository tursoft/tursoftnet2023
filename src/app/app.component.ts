import { Component } from '@angular/core';
import { Session } from './modules/sharedmodule/services/session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Muhammet Turşak';

  constructor(public session: Session) {
    
  }
}
