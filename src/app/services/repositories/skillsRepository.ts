import { Injectable } from "@angular/core";
import { BaseRepository } from "./baseRepository";
import { SkillDto, SkillsDto } from "../../models/skillsDto";
import data from '../../data/skills.json';

@Injectable()
export class SkillsRepository extends BaseRepository<SkillDto, SkillsDto> {
    getData(): SkillsDto {
        return data;
    }

    getItems(): SkillDto[] {
        return data.items;
    }

    getId(item: SkillDto): number {
        return item.id;
    }

    getTitle(item: SkillDto): string {
        return item.name;
    }

    getImageSrcByDto(item: SkillDto, big?: boolean): string {
        let name = item.name ?? '';
        const imageName = name.replaceAll(' ','')
                            .replace('.', '')
                            .replace('#', 'sharp')
                            .toLowerCase();
        return `/assets/images/technologies/${big?'original':'small_50x50'}/${imageName}.png`;
    }

    getImageSrcByDtoBig(item:SkillDto) {
        return this.getImageSrcByDto(item, true);
    }
}