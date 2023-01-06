import { Injectable } from "@angular/core";
import utilsData from '../../data/utils.json';

@Injectable()
export class Utils {
    public getIconCss(code: string) {
        const iconCss: any = utilsData.iconCss
        return iconCss[code];
    }
}