import { Injectable } from "@angular/core";
import { BaseRepository } from "./baseRepository";
import { DomainDto, DomainsDto } from "../../models/domainDto";
import data from '../../data/domains.json';

@Injectable()
export class DomainsRepository extends BaseRepository<DomainDto, DomainsDto> {
    getData(): DomainsDto {
        return data;
    }

    getItems(): DomainDto[] {
        return data.items;
    }

    getId(item: DomainDto): number {
        return item.id;
    }

    getTitle(item: DomainDto): string {
        return item.name;
    }

    getImageSrcByDto(item: DomainDto, big?: boolean): string {
        let name = item.name ?? '';
        const imageName = name.replaceAll(' ','')
                              .replace('.', '')
                              .toLowerCase();
        return `/assets/images/domains/${imageName}.png`;
    }
}