import { Injectable } from "@angular/core";
import dayjs from "dayjs";

import { ProjectFileScreenshotDto } from "../models/projectFileDto";
import { Utils } from "../modules/sharedmodule";

@Injectable()
export class AppUtils {
    
  constructor(public utils: Utils) {
  }

  getDateRangeText = (start: Date | null | undefined, end: Date | null | undefined) => {
    return `${this.utils.dateToText(start, '')} - ${this.utils.dateToText(end, 'Present')}`;
  }
}