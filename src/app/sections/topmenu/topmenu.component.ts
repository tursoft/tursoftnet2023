import { Component } from '@angular/core';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})
export class TopMenuComponent {
  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    element?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
