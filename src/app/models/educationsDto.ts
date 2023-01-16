export interface EducationsDto {
    general: {
        title: string;
        summary: string;
    }
    
    items: EducationDto[]
}

export interface EducationDto {
    id: number;
    orderIndex:number;
    icon?: string; 
    url?: string; 
    code: string; 
    name: string; 
    department?: string; 
    level: string; 
    period: string; 
    datePeriod: {
        startDate: string;
        endDate?: string
    },

    city: string;
    graduateDate: string;
    graduateScore: string;

    courses: CourseDto[];
    technologies?: TechnologyDto[];
}

export interface CourseDto {
    name: string;
    score: string;
    content: string; 
}

export interface TechnologyDto {
    name:  string;
    type:  string;
}