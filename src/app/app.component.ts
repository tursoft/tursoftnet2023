import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './app.animations';
import { Session } from './modules/sharedmodule/services/session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  title = 'Muhammet Turşak';

  constructor(public session: Session) {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && 
      outlet.activatedRouteData && 
      outlet.activatedRouteData['animationState'];
   }
}
