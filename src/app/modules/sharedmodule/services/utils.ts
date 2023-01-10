import { Injectable } from "@angular/core";
import utilsData from '../data/utils.json';

@Injectable({ providedIn: 'root' })
export class Utils
{
    public getTechnologyImageName(name: string, small: boolean) {
        const imageName = name.replaceAll(' ','')
                            .replace('.', '')
                            .replace('#', 'sharp')
                            .toLowerCase();
        return `/assets/images/technologies/${small?'small_50x50':'original'}/${imageName}.png`;
    }

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
}