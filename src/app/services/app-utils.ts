import { Injectable } from "@angular/core";
import dayjs from "dayjs";

import { ProjectFileScreenshotDto } from "../models/projectFileDto";
import { ExperienceDto, ExperiencePositionDto } from "../models/experiencesData";
import { TechnologyDto } from "../models/projectsDto";
import { Utils } from "../modules/sharedmodule";

@Injectable()
export class AppUtils {
    
  constructor(public utils: Utils) {
  }

  getDomainImageSrcByDto = (item: TechnologyDto) => {
    let name = item.name ?? '';
    const imageName = name.replaceAll(' ','')
                        .replace('.', '')
                        .replace('#', 'sharp')
                        .toLowerCase();
    return `/assets/images/domains/${imageName}.png`;
  }

  getProjectScreenshotPath = (fileDto: ProjectFileScreenshotDto) => {
    let path = (false ? fileDto.file_small : fileDto.file_big) ?? '';
    return `/assets/files/projects` + path;
  }

  getDateRangeText = (start: Date | null | undefined, end: Date | null | undefined) => {
    return `${this.utils.dateToText(start, '')} - ${this.utils.dateToText(end, 'Present')}`;
  }
}