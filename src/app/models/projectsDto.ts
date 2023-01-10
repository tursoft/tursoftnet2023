export interface ProjectItemDto {
  id: number,
  name: string,
  title?: string,
  group?: string,
  company?: string,
  value?: number,
  icon?: string,
  summary?: string,
  fulltext?: string | string[],

  datePeriod: { 
    startDate: string,
    endDate?: string | null
  },
  
  props?: { 
      name:string,
      title: string
  }[],

  domains?: {
    name: string, 
    title: string,
    value: number,
    iconCss?: string
  }[],
  
  team?: { 
      position?: string,
      name?: string,
      contactNo?: string
  }[],

  modules?: string[],
  customers?: string[],
  partners?: string[],

  technologies?: {
    name:  string,
    type: string
  }[]
}

export interface ProjectGroupDto {
  name?: string;
  title: string;
  value?: number;
  iconCss?: string;
}

export interface ProjectsDto {
    general: {
        title: string,
        summary?: string,
        groups: ProjectGroupDto[]
      },
      
    items: ProjectItemDto[]
}