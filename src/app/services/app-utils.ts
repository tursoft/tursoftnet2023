import { Injectable } from "@angular/core";
import dayjs from "dayjs";

import { ProjectFileScreenshotDto } from "../models/projectFileDto";
import { ExperienceDto, ExperiencePositionDto } from "../models/experiencesData";
import { TechnologyDto } from "../models/projectsDto";
import { Utils } from "../modules/sharedmodule";
import { EducationDto } from "../models/educationsDto";

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

  getTechnologyImageSrcByDto = (item: TechnologyDto, big: boolean = false) => {
    let name = item.name ?? '';
    const imageName = name.replaceAll(' ','')
                        .replace('.', '')
                        .replace('#', 'sharp')
                        .toLowerCase();
    return `/assets/images/technologies/${big?'original':'small_50x50'}/${imageName}.png`;
  }

  getTechnologyImageSrcByDtoBig = (item: TechnologyDto) => {
    return this.getTechnologyImageSrcByDto(item, true);
  }

  getProjectScreenshotPath = (fileDto: ProjectFileScreenshotDto) => {
    let path = (false ? fileDto.file_small : fileDto.file_big) ?? '';
    return `/assets/files/projects` + path;
  }

  getExperienceImageSrcByDto = (item: ExperienceDto) => {
    return `/assets/images/experiences/${item.icon}`;
  }

  getEducationImageSrcByDto = (item: EducationDto) => {
    return `/assets/images/academic/${item.icon}`;
  }

  getDateRangeForPositions = (positions: ExperiencePositionDto[], returnNullForEndDateIfEmpty: boolean): { start: Date, end: Date | null } =>
	{
		var now=new Date();
		let startDate: Date | null = null;
		let endDate: Date | null = null;

		positions.forEach((pos) =>
		{
      const positionStartDate = this.utils.parseDateText(pos.startDate);
      const positionEndDate = this.utils.parseDateText(pos.endDate) ?? now;
      
			if (!startDate || (positionStartDate && (positionStartDate < startDate)))
        startDate = positionStartDate;

			if (!endDate || (positionEndDate && (positionEndDate > endDate)))
        endDate = positionEndDate;
		});

    if (returnNullForEndDateIfEmpty && endDate == now) {
      endDate = null;
    }

    return { start: startDate!, end: endDate! };
	}

  getYearCountForPositions = (positions: ExperiencePositionDto[]) =>
	{
		const range = this.getDateRangeForPositions(positions, false);
    let years = dayjs(range.end).diff(dayjs(range.start), 'years', true);
		years = this.utils.round(years, 1);
		return years + ' y';
	}

  getDateRangeForPositionsText = (positions: ExperiencePositionDto[]) =>
	{
		const range = this.getDateRangeForPositions(positions, true);
		return this.getDateRangeText(range.start, range.end);
	}

  getDateRangeText = (start: Date | null | undefined, end: Date | null | undefined) => {
    return `${this.utils.dateToText(start, '')} - ${this.utils.dateToText(end, 'Present')}`;
  }
}