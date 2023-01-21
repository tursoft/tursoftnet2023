import { Injectable } from "@angular/core";
import { ProjectFileScreenshotDto } from "src/app/models/projectFileDto";
import { TechnologyDto } from "../models/projectsDto";
import { Utils } from "../modules/sharedmodule";

@Injectable()
export class AppUtils {
    
  constructor(public utils: Utils) {
  }

  getDomainImageByName(name: string) {
    const imageName = name.replaceAll(' ','')
                        .replace('.', '')
                        .replace('#', 'sharp')
                        .toLowerCase();
    return `/assets/images/domains/${imageName}.png`;
  }

  getTechnologyImageByName(name: string, small: boolean) {
      const imageName = name.replaceAll(' ','')
                          .replace('.', '')
                          .replace('#', 'sharp')
                          .toLowerCase();
      return `/assets/images/technologies/${small?'small_50x50':'original'}/${imageName}.png`;
  }

  getDomainImage = (item: TechnologyDto) => {
    return this.getDomainImageByName(item.name);
  }  

  getTechnologyImage = (item: TechnologyDto) => {
    return this.getTechnologyImageByName(item.name, true);
  }

  getTechnologyImageBig = (item: TechnologyDto) => {
    return this.getTechnologyImageByName(item.name, false);
  }

  getProjectScreenshotPath = (fileDto: ProjectFileScreenshotDto) => {
    let path = (false ? fileDto.file_small : fileDto.file_big) ?? '';
    return `/assets/files/projects` + path;
  }
}