/* modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridTemplateDirective, ObserveElementDirective } from './directives';
import { Session, Utils } from './services';

import { BaseComponent } from './components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BaseComponent,
    ObserveElementDirective,
    GridTemplateDirective
  ],
  
  imports: [
    CommonModule,
    FormsModule
  ],

  providers: [
    Session,
    Utils
  ],

  exports: [
    CommonModule,
    FormsModule,
    
    BaseComponent,

    ObserveElementDirective,
    GridTemplateDirective
  ]
})
export class SharedModule { }
