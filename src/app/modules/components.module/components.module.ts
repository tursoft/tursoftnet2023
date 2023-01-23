/* modules */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module/shared.module';

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
