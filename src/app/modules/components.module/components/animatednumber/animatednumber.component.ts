import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '../../../shared.module';

@Component({
  selector: 'app-animatednumber',
  templateUrl: './animatednumber.component.html',
  styleUrls: ['./animatednumber.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AnimatedNumberComponent extends BaseComponent implements AfterViewInit, OnChanges {

    @Input() duration: number = 100;
    @Input() digit: number = 10;
    @Input() steps: number = 5;
    @ViewChild("animatedDigit", { static: false }) animatedDigit?: ElementRef;
  
    animateCount() {
      if (!this.duration) {
        this.duration = 100;
      }
  
      if (typeof this.digit === "number") {
        this.counterFunc(this.digit, this.duration, this.animatedDigit);
      }
   }
  
    counterFunc(endValue: number, durationMs: number, element?: ElementRef) {
      if (!this.steps) {
        this.steps = 12;
      }
  
      const stepCount = Math.abs(durationMs / this.steps);
      const valueIncrement = (endValue - 0) / stepCount;
      const sinValueIncrement = Math.PI / stepCount;
  
      let currentValue = 0;
      let currentSinValue = 0;
  
      function step() {
        currentSinValue += sinValueIncrement;
        currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;
  
        if (element) {
            element.nativeElement.textContent = Math.abs(Math.floor(currentValue));
        }

        if (currentSinValue < Math.PI) {
          window.requestAnimationFrame(step);
        }
      }
  
      step();
    }
  
    ngAfterViewInit() {
      if (this.digit) {
        this.animateCount();
      }
    }
  
    ngOnChanges(changes: SimpleChanges) {
      if (changes["digit"]) {
        this.animateCount();
      }
    }
}
