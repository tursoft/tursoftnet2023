import { Injectable } from "@angular/core";
import { ProjectFileScreenshotDto } from "src/app/models/projectFileDto";
import { TechnologyDto } from "../models/projectsDto";
import { Utils } from "../modules/sharedmodule";

@Injectable()
export class AppUtils {
    
  constructor(public utils: Utils) {
  }

  getDomainImageName = (item: TechnologyDto) => {
    return this.utils.getDomainImageName(item.name);
  }  

  getTechnologyImageName = (item: TechnologyDto) => {
    return this.utils.getTechnologyImageName(item.name, true);
  }

  getProjectScreenshotPath = (fileDto: ProjectFileScreenshotDto) => {
    let path = (false ? fileDto.file_small : fileDto.file_big) ?? '';
    return `/assets/files/projects` + path;
  }
}