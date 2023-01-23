/* modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './modules/sharedmodule';
import { ComponentsModule } from './modules/componentsmodule';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* pages */
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { Notfound404Component } from './pages/notfound404/notfound404.component';

/* home - sections */
import { TopMenuComponent } from './sections/topmenu/topmenu.component';
import { WelcomeComponent } from './pages/home/sections/welcome/welcome.component';
import { AboutMeComponent } from './pages/home/sections/aboutme/aboutme.component';
import { StatisticsComponent } from './pages/home/sections/statistics/statistics.component';
import { ProjectsComponent } from './pages/home/sections/projects/projects.component';
import { ExperiencesComponent } from './pages/home/sections/experiences/experiences.component';
import { EducationsComponent } from './pages/home/sections/educations/educations.component';
import { SkillsComponent } from './pages/home/sections/skills/skills.component';
import { ReferencesComponent } from './pages/home/sections/references/references.component';

/* root - sections */
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { LoadingComponent } from './sections/loading/loading.component';
import { AngularMaterialModule } from './modules/angularmaterial.module';

/* components */
import { DetailsPage } from './components/details-page/details-page.component';
import { ProjectScreenshotDetailsComponent } from './pages/project/screenshot-details/screenshot-details.component';

/* providers */
import { AppUtils } from './services/app-utils';
import { EducationsRepository } from './services/repositories/educationsRepository';
import { SkillsRepository } from './services/repositories/skillsRepository';
import { DomainsRepository } from './services/repositories/domainsRepository';
import { ReferencesRepository } from './services/repositories/referencesRepository';
import { ExperiencesRepository } from './services/repositories/experiencesRepository';
import { ExperiencePositionsRepository } from './services/repositories/experiencePositionsRepository';
import { ProjectsRepository } from './services/repositories/projectsRepository';
import { ProjectFilesRepository } from './services/repositories/projectFilesRepository';

@NgModule({
  declarations: [
    AppComponent,

    /* pages */
    HomeComponent,
    ProjectComponent,
    EducationComponent,
    ExperienceComponent,
    Notfound404Component,

    /* home - sections */
    TopMenuComponent,
    WelcomeComponent, 
    AboutMeComponent,
    ProjectsComponent,
    EducationsComponent,
    StatisticsComponent,
    ExperiencesComponent,
    ReferencesComponent,
    SkillsComponent,

    /* root - sections */
    HeaderComponent,
    FooterComponent,
    LoadingComponent,

    /* shared */
    ProjectScreenshotDetailsComponent,
    DetailsPage
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ComponentsModule,
    AngularMaterialModule,
  ],

  providers: [
    AppUtils,
    EducationsRepository,
    SkillsRepository,
    DomainsRepository,
    ReferencesRepository,
    ExperiencesRepository,
    ExperiencePositionsRepository,
    ProjectsRepository,
    ProjectFilesRepository
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
