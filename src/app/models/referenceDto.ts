export interface ReferencesDto {
    items: ReferenceDto[];
}

export interface ReferenceDto {
    id: number;
    code: string,
    icon?: string,
    name: string, 
    company?: string, 
    job?: string,
    contacts: {
        code: string,
        value: string
    }[],
    reference_text?: string;
    isactive?: boolean;
    orderIndex: number;
}