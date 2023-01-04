export interface ProjectsDto {
    general: {
        title: string,
        summary?: string,
        groups: { 
            name: string,
            title: string, 
            value: number, 
            iconCss?: string
        }[]
      },
      
    items: {
      id: number,
      name: string,
      title?: string,
      group?: string,
      company?: string,
      value?: number,
      icon?: string,
      summary?: string,
      fulltext?: string | string[],

      datePeriod?: { 
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

    }[]
}