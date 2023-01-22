import { Injectable } from "@angular/core";
import { BaseRepository } from "./baseRepository";
import { Utils } from "../../modules/sharedmodule";
import { AppUtils } from "../app-utils";
import { ExperienceDto, ExperiencesDto } from "../../models/experiencesData";
import data from '../../data/experiences.json';

@Injectable()
export class ExperiencesRepository extends BaseRepository<ExperienceDto, ExperiencesDto> {
    constructor(
        public utils: Utils,
        public appUtils: AppUtils
    ) {
        super();
    }

    getData(): ExperiencesDto {
        return data;
    }

    getItems(): ExperienceDto[] {
        const data = this.getData();
        return data.items;
    }

    getId(item: ExperienceDto): number {
        return item.id;
    }

    getTitle(item: ExperienceDto): string {
        return item.companyName ?? '';
    }

    getImageSrcByDto(item: ExperienceDto, big?: boolean): string {
        return `/assets/images/experiences/${item.icon}`;
    }

    getImageSrcByDtoBig(item:ExperienceDto) {
        return this.getImageSrcByDto(item, true);
    }
}