/* modules */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../sharedmodule/shared.module';

import * as fromComponents from './components';

@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    SharedModule,
    ...fromComponents.components
  ]
})
export class ComponentsModule { }
