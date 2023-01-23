import { Injectable } from "@angular/core";
import { BaseRepository } from "./baseRepository";
import { ProjectItemDto, ProjectsDto } from "src/app/models/projectsDto";
import data from '../../data/projects.json';

@Injectable()
export class ProjectsRepository extends BaseRepository<ProjectItemDto, ProjectsDto> {
    getData(): ProjectsDto {
        return data;
    }

    getItems(): ProjectItemDto[] {
        return data.items;
    }

    getId(item: ProjectItemDto): number {
        return item.id;
    }

    getTitle(item: ProjectItemDto): string {
        return item.name;
    }

    getImageSrcByDto(item: ProjectItemDto, big?: boolean): string {
        return `/assets/files/projects/_logos/${item.icon}`;
    }

    getImageSrcByDtoBig(item:ProjectItemDto) {
        return this.getImageSrcByDto(item, true);
    }
}