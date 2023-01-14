import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    declarations: [
    ],
    imports: [
        MatCardModule,
        MatTabsModule
    ],
    providers: [],
    bootstrap: [],
    exports: [
        MatCardModule,
        MatTabsModule
    ]
  })
  export class AngularMaterialModule { }
  