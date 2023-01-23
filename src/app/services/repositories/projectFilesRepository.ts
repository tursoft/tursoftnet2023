import { Injectable } from "@angular/core";

import { ProjectFileScreenshotDto, ProjectFilesDto } from "../../models/projectFileDto";
import data from '../../data/project_files.json';

@Injectable()
export class ProjectFilesRepository {
    getData(): ProjectFilesDto {
        return data;
    }

    getScreenshotsByProjectName(projectName: string): ProjectFileScreenshotDto[] {
        const data = this.getData();
        return data.general[projectName]?.screenshoots ?? [];
    }

    getImageSrcByDto = (item: ProjectFileScreenshotDto, big: boolean = false) => {
        return `/assets/files/projects/${big? item.file_big: item.file_small}`;
    }

    getImageSrcByDtoBig = (item: ProjectFileScreenshotDto) => {
        return this.getImageSrcByDto(item, true);
    }
}