/* modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridTemplateDirective, ObserveElementDirective } from './directives';
import { Session, Utils } from './services';

import { BaseComponent } from './components';

@NgModule({
  declarations: [
    BaseComponent,
    ObserveElementDirective,
    GridTemplateDirective
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
    
    BaseComponent,

    ObserveElementDirective,
    GridTemplateDirective
  ]
})
export class SharedModule { }
