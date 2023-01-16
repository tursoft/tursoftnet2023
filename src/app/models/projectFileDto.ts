export interface ProjectFilesDto {
    general: {[key: string]: ProjectFileDto};
}

export interface ProjectFileDto {
    screenshoots: ProjectFileScreenshotDto[];
}

export interface ProjectFileScreenshotDto {
    file_small?: string;
    file_big?: string;
    title?: string;
    orderindex: number;
}