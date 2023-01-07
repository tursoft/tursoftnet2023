export interface SkillItemDto {
    name: string;
    title: string;
    group?: string;
    value?: number;
    iconCss?: string;
    projects?: number;
    jobs?: number;
    orderindex?: number;
    ismajor?: boolean;
  }
  
  export interface SkillGroupDto {
    name?: string;
    title: string;
    value?: number;
    iconCss?: string;
  }
  
  export interface SkillsDto {
      general: {
          title: string,
          summary?: string,
          groups: SkillGroupDto[]
      },
        
      items: SkillItemDto[]
  }