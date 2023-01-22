import { Component, ContentChild, Input, TemplateRef } from "@angular/core";

@Component({
    selector: 'app-details-page',
    templateUrl: './details-page.component.html',
    styleUrls: ['./details-page.component.scss'],
  })
export class DetailsPage {
  @Input() header!: string;
  @Input() title!: string;
  @Input() topTitle!: string;
  @Input() subTitle!: string;
  @Input() item?: any;
  @Input() getImgSrc!: (item: any) => string;
}