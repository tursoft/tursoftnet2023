import { Injectable } from "@angular/core";
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import utilsData from '../data/utils.json';

@Injectable({ providedIn: 'root' })
export class Utils
{
    public getIconCss(code: string) {
        const iconCss: any = utilsData.iconCss
        return iconCss[code];
    }
    
    public isEmptyString(
        text: string | null | undefined,
      ): text is undefined | null 
    {
        return !text?.toString()?.trim().length
    }

    public filterItemsByText<T>(items:T[], targetFields: (keyof(T))[], filterText?: string): T[] {
        const filteredItems = items.filter(item => this.doesItemMatchedByText(item, targetFields, filterText))
        return filteredItems;
    }

    public doesItemMatchedByText<T>(item:T, targetFields: (keyof(T))[], filterText?: string): boolean {
        if (this.isEmptyString(filterText))
            return true;

        if (!item)
            return false;
        
        const filterTextLower = filterText.toLowerCase();
        for(const targetField of targetFields) {
            const value: string = ((<any>item[targetField])?.toString() ?? '');
            if (value.includes(filterText) || value.toLowerCase().includes(filterTextLower))
                return true;
        }

        return false;
    }
        
    round(num: number, places: number) 
	{
	  if(!places)
	  {
       	return Math.round(num);
      }

      var val = Math.pow(10, places);
      return Math.round(num * val) / val;
    }

    dateToText(dt: Date | null | undefined, defaultText: string)
	{
		if (!dt)
			return defaultText;

		var format="DD.MM.YYYY";
		return dayjs(dt).format(format);
    }

    parseDateText(text: string | null | undefined): Date | null {
        dayjs.extend(customParseFormat);
        let date: Date | null = null;
        if (!text)
            date = null;
        else
            date = dayjs(text, 'DD.MM.YYYY', true).toDate();

        return date;
    }
}
