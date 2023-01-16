import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [],
    providers: [],
    bootstrap: [],

    imports: [
        MatCardModule,
        MatTabsModule,
        MatDialogModule,
        MatButtonModule
    ],
    exports: [
        MatCardModule,
        MatTabsModule,
        MatDialogModule,
        MatButtonModule
    ]
  })
  export class AngularMaterialModule { }
  