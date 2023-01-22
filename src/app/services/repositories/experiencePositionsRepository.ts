import { Injectable } from "@angular/core";
import dayjs from "dayjs";
import { BaseRepository } from "./baseRepository";
import { Utils } from "../../modules/sharedmodule";
import { AppUtils } from "../app-utils";
import { ExperiencePositionDto, ExperiencePositionItemDto, ExperiencesDto } from "../../models/experiencesData";
import data from '../../data/experiences.json';

@Injectable()
export class ExperiencePositionsRepository extends BaseRepository<ExperiencePositionItemDto, ExperiencesDto> {
    constructor(
        public utils: Utils,
        public appUtils: AppUtils
    ) {
        super();
    }

    getData(): ExperiencesDto {
        return data;
    }

    getItems(): ExperiencePositionItemDto[] {
        const data = this.getData();
        let items: ExperiencePositionItemDto[] = [];

        for(const experience of data.items) {
            if (experience.positions) {
                for(const position of experience.positions) {
                items.push({ experience, position });
                }
            }
        }

        return items;
    }

    getId(item: ExperiencePositionItemDto): number {
        return item.position.id;
    }

    getTitle(item: ExperiencePositionItemDto): string {
        return item.position.title;
    }

    getImageSrcByDto(item: ExperiencePositionItemDto, big?: boolean): string {
        return `/assets/images/experiences/${item.experience.icon}`;
    }

    getImageSrcByDtoBig(item:ExperiencePositionItemDto) {
        return this.getImageSrcByDto(item, true);
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
		return this.appUtils.getDateRangeText(range.start, range.end);
	}

    getDateRangeTextForPosition(position?: ExperiencePositionDto) {
        if (!position)
            return '';

        const start = this.utils.parseDateText(position.startDate);
        const end = this.utils.parseDateText(position.endDate);
        return this.appUtils.getDateRangeText(start, end);
    }
}