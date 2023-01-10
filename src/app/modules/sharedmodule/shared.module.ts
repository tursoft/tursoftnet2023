/* modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObserveElementDirective } from './directives';
import { Session, Utils } from './services';

import * as fromComponents from './components';

@NgModule({
  declarations: [
    ...fromComponents.components,
    ObserveElementDirective
  ],
  
  imports: [
    CommonModule
  ],

  providers: [
    Session,
    Utils
  ],

  exports: [
    CommonModule,
    ...fromComponents.components,
    ObserveElementDirective
  ]
})
export class SharedModule {
  // static forRoot(): ModuleWithProviders<SharedModule> {
  //   return {
  //     ngModule: SharedModule,
  //     providers: [
  //       Session,
  //       Utils
  //     ]
  //   };
  // }
}
