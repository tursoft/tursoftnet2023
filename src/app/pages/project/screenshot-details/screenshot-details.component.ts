import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProjectFileScreenshotDto } from "src/app/models/projectFileDto";
import { ProjectFilesRepository } from "src/app/services/repositories/projectFilesRepository";
import { AppUtils } from "../../../services/app-utils";

export interface ProjectScreenshotDetailsData {
    item: ProjectFileScreenshotDto;
}

@Component({
    selector: 'app-screenshot-details',
    templateUrl: './screenshot-details.component.html',
    styleUrls: ['./screenshot-details.component.scss'],
})
export class ProjectScreenshotDetailsComponent {
    fullscreenEnabled: boolean = false;
    isFullscreen: boolean = false;

    constructor(
        public repoProjectFiles: ProjectFilesRepository,
        public appUtils: AppUtils,
        public dialogRef: MatDialogRef<ProjectScreenshotDetailsData>,
        @Inject(MAT_DIALOG_DATA) public data: ProjectScreenshotDetailsData,
    ) {
        this.fullscreenEnabled = document.fullscreenEnabled;
    }

    showFullscreen(element: Element) {
        if (!this.fullscreenEnabled)
            return;

        if (this.isFullscreen) {
            document.exitFullscreen();
            this.isFullscreen = false;
        } else {
            element.requestFullscreen();
            this.isFullscreen = true;
        }
        
    }

    static showDialog(matDialog: MatDialog, item: any) {
        return matDialog.open<ProjectScreenshotDetailsComponent, ProjectScreenshotDetailsData>(ProjectScreenshotDetailsComponent, {
            data: { item },
            autoFocus: true,
            closeOnNavigation: true,
            minWidth: '90%',
            minHeight: '90%'
        })
    }
}