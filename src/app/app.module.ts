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

/* providers */
import { ProjectUtils } from './pages/project/project-utils';
import { ProjectScreenshotDetailsComponent } from './pages/project/screenshot-details/screenshot-details.component';

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
    ProjectScreenshotDetailsComponent
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
    ProjectUtils
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
