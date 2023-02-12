import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '../../../shared.module';

@Component({
  selector: 'app-animatednumber',
  templateUrl: './animatednumber.component.html',
  styleUrls: ['./animatednumber.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AnimatedNumberComponent extends BaseComponent implements OnInit {

  @Input() value: number = 15;
  @Input() start: number = 5;
  inited: boolean = false;

  constructor(public elementRef: ElementRef) {
    super(); 
  }

  ngOnInit(): void {
    this.prepare();
  }

  prepare() {
      const element = this.elementRef.nativeElement;
      console.log('elementRef.nativeElement:', element);

      element.style.setProperty('--value', this.value.toString());
      element.style.setProperty('--valueStart', Math.round(this.value / 1).toString());
      element.style.setProperty('--valueEnd', this.value.toString());

      this.inited = true;
  }
}
