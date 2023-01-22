export interface DomainDto {
    id: number;
    name: string;
    title: string;
    value: number;
    iconCss?: string;
}

export interface DomainsDto {
    items: DomainDto[];
}