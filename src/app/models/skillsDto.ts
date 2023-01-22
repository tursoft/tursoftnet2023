export interface SkillItemDto {
    name: string;
    title: string;
    type?: string;
    group?: string;
    value?: number;
    iconCss?: string;
    projects?: number;
    jobs?: number;
    orderIndex?: number;
    isMajor?: boolean;
  }
  
  export interface SkillGroupDto {
    name?: string;
    title: string;
    value?: number;
    orderIndex: number;
  }
  
  export interface SkillsDto {
      general: {
          title: string,
          summary?: string,
          groups: SkillGroupDto[]
      },
        
      items: SkillItemDto[]
  }