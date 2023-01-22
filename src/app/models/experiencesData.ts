export interface ExperiencesDto {
    general: {
        title: string;
        summary: string;
        total_years: number;                
        prop_subitems: string;
    }
    
    items: ExperienceDto[]
}

export interface ExperienceDto {
    id: number;
    orderIndex?: number;
    icon?: string;
    companyCode?: string;
    companyName?: string;                        
    positions: ExperiencePositionDto[];
}

export interface ExperiencePositionDto {
    id: number;
    title: string;                                
    startDate: string;
    endDate?: string | null;     
    summary?: string;

    domains?: { 
        name: string;
        title: string;
        value?: number;
        iconCss?: string; 
    }[];

    projects?: { 
        name:  string;
        title: string; 
    }[];

    technologies?: {
        name: string;
        type: string;
    }[]
}