import { Component, EventEmitter, OnDestroy } from "@angular/core";
import { EventEmitter as PropertyChangeEventEmitter } from 'events';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-basecomponent',
  template: '<div></div>',
})
export class BaseComponent implements OnDestroy {

    public onPropertyChanged = new PropertyChangeEventEmitter();
    private propertyValues:any = {};

    public subscriptions: Subscription[] = [];
    isDestroyed = false;

    constructor() {

    }

    addPropertyChangedListener(propertyNames: string[], listener: (... args: any[]) => void) {
        if (propertyNames) {
          for (const propertyName of propertyNames) {
            this.onPropertyChanged.addListener(propertyName, listener);
          }
        }
      }
    
      protected getPropertyValue<T>(propertyName: string, defaultValue: T | null): T {
        let val = this.propertyValues[propertyName];
        if (val == null) {
          val = defaultValue;
        }
    
        return <T>val;
      }
    
      protected setPropertyValue<T>(propertyName: string, newValue: T, onChanged: EventEmitter<T> | null = null, preventAutoTriggerPropertyChanged = false) {
        const oldValue = this.getPropertyValue<T>(propertyName, null);
        this.propertyValues[propertyName] = newValue;
        if (oldValue != newValue) {
          if (!preventAutoTriggerPropertyChanged) {
            this.firePropertyChanged(propertyName, oldValue, newValue);
          }
    
          if (onChanged != null) {
            onChanged.emit(<any>newValue);
          }
        }
      }
    
      protected firePropertyChanged(propertyName: string, oldValue: any, newValue: any) {
        this.onPropertyChanged.emit(propertyName, { oldValue: oldValue, newValue: newValue });
      }
    
      ngOnDestroy(): void {
    
        this.isDestroyed = true;
    
        if (this.subscriptions != null) {
          for (const subscription of this.subscriptions) {
            if (subscription != null && !subscription.closed) {
              subscription.unsubscribe();
            }
          }
        }
    
        if (this.onPropertyChanged != null) {
          this.onPropertyChanged.removeAllListeners();
        }
      }
}
