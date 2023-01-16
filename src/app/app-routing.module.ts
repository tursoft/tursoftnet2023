import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Notfound404Component } from './pages/notfound404/notfound404.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animationState: 'Home' } },
  { path: 'projects/:id', component: ProjectComponent, data: { animationState: 'Details' } },
  { path: 'educations/:id', component: EducationComponent, data: { animationState: 'Details' } },
  { path: 'experiences/:id', component: ExperienceComponent, data: { animationState: 'Details' } },
  { path: '**', pathMatch: 'full', component: Notfound404Component, data: { animationState: 'NotFound' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    useHash: true, 
    scrollPositionRestoration: 'top', 
    anchorScrolling: 'enabled' 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
