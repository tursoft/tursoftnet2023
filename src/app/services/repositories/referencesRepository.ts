import { Injectable } from "@angular/core";
import { BaseRepository } from "./baseRepository";
import { ReferenceDto, ReferencesDto } from "src/app/models/referenceDto";
import data from '../../data/references.json';

@Injectable()
export class ReferencesRepository extends BaseRepository<ReferenceDto, ReferencesDto> {
    getData(): ReferencesDto {
        return data;
    }

    getItems(): ReferenceDto[] {
        let items = data.items;
        items = items
               //.filter(p => p.isactive ?? false)
               .sort((r1, r2) => r1.orderIndex==r2.orderIndex ? 0 : r1.orderIndex>r2.orderIndex ? 1 : -1);
        return items;
    }

    getId(item: ReferenceDto): number {
        return item.id;
    }

    getTitle(item: ReferenceDto): string {
        return item.name;
    }

    getImageSrcByDto(item: ReferenceDto, big?: boolean): string {
        return `/assets/images/references/${item.icon}`;
    }
}