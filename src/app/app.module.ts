import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* pages */
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { Notfound404Component } from './pages/notfound404/notfound404.component';

/* home - sections */
import { IntroComponent } from './pages/home/sections/intro/intro.component';
import { ProfileComponent } from './pages/home/sections/profile/profile.component';
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
    IntroComponent, 
    ProfileComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }