import { Injectable } from "@angular/core";
import { EducationDto, EducationsDto } from "src/app/models/educationsDto";
import { BaseRepository } from "./baseRepository";
import data from '../../data/education.json';

@Injectable()
export class EducationsRepository extends BaseRepository<EducationDto, EducationsDto> {
    getData(): EducationsDto {
        return data;
    }

    getItems(): EducationDto[] {
        return data.items;
    }

    getId(item: EducationDto): number {
        return item.id;
    }

    getTitle(item: EducationDto): string {
        return item.name;
    }

    getImageSrcByDto(item: EducationDto, big?: boolean): string {
        return `/assets/images/academic/${item.icon}`;
    }
}