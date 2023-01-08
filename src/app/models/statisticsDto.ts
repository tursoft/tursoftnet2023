export interface StatisticsDto {
    general: {};
    items: StatisticsItemDto[];
    subItems: StatisticsItemDto[];
}

export interface StatisticsItemDto {
    name: string;
    title: string; 
    value: number;
    subTitle: string; 
    iconCss?: string;
}
