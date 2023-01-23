import { Component } from '@angular/core';
import { ReferenceDto } from '../../../../models/referenceDto';
import { Utils } from '../../../../modules/shared.module';
import { ReferencesRepository } from '../../../../services/repositories/referencesRepository';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {

  items: ReferenceDto[]=[];
  item?: ReferenceDto;

  constructor(
    public repo: ReferencesRepository,
    public utils: Utils
  ) {
    this.items = repo.getItems();
    this.item = this.items[0];
  }

  getPrev() {
    if (!this.item)
      return;
    const prevItem = this.items[this.items.indexOf(this.item)-1];
    if (prevItem) {
      return prevItem;
    }
    return null;
  }

  getNext() {
    if (!this.item)
      return null;
    const nextItem = this.items[this.items.indexOf(this.item)+1];
    if (nextItem) {
      return nextItem;
    }

    return null;
  }

  prev() {
    const prevItem = this.getPrev();
    if (!prevItem)
      return;
    this.item = prevItem;
  }

  next() {
    const nextItem = this.getNext();
    if (!nextItem)
      return;
    this.item = nextItem;
  }
}
