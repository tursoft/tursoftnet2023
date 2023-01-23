import { Component } from '@angular/core';
import { SkillGroupDto, SkillDto, SkillsDto } from '../../../../models/skillsDto';
import { Utils } from '../../../../modules/shared.module';
import { SkillsRepository } from '../../../../services/repositories/skillsRepository';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  data: SkillsDto;
  groups: SkillGroupDto[] = [];
  items: SkillDto[] = [];

  constructor(
    public repo: SkillsRepository,
    public utils: Utils
  ) {
    this.data = this.repo.getData();

    const groupAll: SkillGroupDto = {
        name: undefined,
        title: 'All',
        orderIndex: -1
    };

    this.groups = [groupAll, ...this.data.general.groups];

    // prepare items
    this.items = this.repo.getItems();
  }
}
